let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { EmailNullClientV1 } from 'pip-clients-email-node';
import { EmailSettingsMemoryPersistence } from 'pip-services-emailsettings-node';
import { EmailSettingsController } from 'pip-services-emailsettings-node';
import { IEmailSettingsClientV1 } from '../../src/version1/IEmailSettingsClientV1';
import { EmailSettingsDirectClientV1 } from '../../src/version1/EmailSettingsDirectClientV1';
import { EmailSettingsClientFixtureV1 } from './EmailSettingsClientFixtureV1';

suite('EmailSettingsDirectClientV1', ()=> {
    let client: EmailSettingsDirectClientV1;
    let fixture: EmailSettingsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EmailSettingsMemoryPersistence();
        let controller = new EmailSettingsController();
        controller.configure(new ConfigParams());

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-emailsettings', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-emailsettings', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-emaildelivery', 'client', 'null', 'default', '1.0'), new EmailNullClientV1()
        );
        controller.setReferences(references);

        client = new EmailSettingsDirectClientV1();
        client.setReferences(references);

        fixture = new EmailSettingsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
