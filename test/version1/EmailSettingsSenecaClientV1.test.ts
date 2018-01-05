let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';
import { SenecaInstance } from 'pip-services-net-node';

import { EmailNullClientV1 } from 'pip-clients-email-node';
import { EmailSettingsMemoryPersistence } from 'pip-services-emailsettings-node';
import { EmailSettingsController } from 'pip-services-emailsettings-node';
import { EmailSettingsSenecaServiceV1 } from 'pip-services-emailsettings-node';
import { IEmailSettingsClientV1 } from '../../src/version1/IEmailSettingsClientV1';
import { EmailSettingsSenecaClientV1 } from '../../src/version1/EmailSettingsSenecaClientV1';
import { EmailSettingsClientFixtureV1 } from './EmailSettingsClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('EmailSettingsSenecaClient', () => {
    let service: EmailSettingsSenecaServiceV1;
    let client: EmailSettingsSenecaClientV1;
    let fixture: EmailSettingsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EmailSettingsMemoryPersistence();
        let controller = new EmailSettingsController();
        controller.configure(new ConfigParams());

        service = new EmailSettingsSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-net', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-emailsettings', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-emailsettings', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-emailsettings', 'service', 'seneca', 'default', '1.0'), service,
            new Descriptor('pip-services-emaildelivery', 'client', 'null', 'default', '1.0'), new EmailNullClientV1()
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new EmailSettingsSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

        fixture = new EmailSettingsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
