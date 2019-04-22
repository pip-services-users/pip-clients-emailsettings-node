let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { EmailNullClientV1 } from 'pip-clients-email-node';
import { EmailSettingsMemoryPersistence } from 'pip-services-emailsettings-node';
import { EmailSettingsController } from 'pip-services-emailsettings-node';
import { EmailSettingsHttpServiceV1 } from 'pip-services-emailsettings-node';
import { IEmailSettingsClientV1 } from '../../src/version1/IEmailSettingsClientV1';
import { EmailSettingsHttpClientV1 } from '../../src/version1/EmailSettingsHttpClientV1';
import { EmailSettingsClientFixtureV1 } from './EmailSettingsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('EmailSettingsHttpClientV1', ()=> {
    let service: EmailSettingsHttpServiceV1;
    let client: EmailSettingsHttpClientV1;
    let fixture: EmailSettingsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EmailSettingsMemoryPersistence();
        let controller = new EmailSettingsController();
        controller.configure(new ConfigParams());

        service = new EmailSettingsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-emailsettings', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-emailsettings', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-emailsettings', 'service', 'http', 'default', '1.0'), service,
            new Descriptor('pip-services-emaildelivery', 'client', 'null', 'default', '1.0'), new EmailNullClientV1()
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new EmailSettingsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

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
