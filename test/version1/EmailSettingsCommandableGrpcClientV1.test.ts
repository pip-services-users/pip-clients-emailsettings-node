let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { EmailNullClientV1 } from 'pip-clients-email-node';

import { EmailSettingsMemoryPersistence } from 'pip-services-emailsettings-node';
import { EmailSettingsController } from 'pip-services-emailsettings-node';
import { EmailSettingsCommandableGrpcServiceV1 } from 'pip-services-emailsettings-node';
import { IEmailSettingsClientV1 } from '../../src/version1/IEmailSettingsClientV1';
import { EmailSettingsCommandableGrpcClientV1 } from '../../src/version1/EmailSettingsCommandableGrpcClientV1';
import { EmailSettingsClientFixtureV1 } from './EmailSettingsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('EmailSettingsCommandableGrpcClientV1', ()=> {
    let service: EmailSettingsCommandableGrpcServiceV1;
    let client: EmailSettingsCommandableGrpcClientV1;
    let fixture: EmailSettingsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EmailSettingsMemoryPersistence();
        let controller = new EmailSettingsController();

        service = new EmailSettingsCommandableGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-emailsettings', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-emailsettings', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-emailsettings', 'service', 'commandable-grpc', 'default', '1.0'), service,
            new Descriptor('pip-services-email', 'client', 'null', 'default', '1.0'), new EmailNullClientV1()
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new EmailSettingsCommandableGrpcClientV1();
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
