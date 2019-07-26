let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { EmailSettingsMemoryPersistence } from 'pip-services-emailsettings-node';
import { EmailSettingsController } from 'pip-services-emailsettings-node';
import { EmailSettingsGrpcServiceV1 } from 'pip-services-emailsettings-node';
import { IEmailSettingsClientV1 } from '../../src/version1/IEmailSettingsClientV1';
import { EmailSettingsGrpcClientV1 } from '../../src/version1/EmailSettingsGrpcClientV1';
import { EmailSettingsClientFixtureV1 } from './EmailSettingsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('EmailSettingsGrpcClientV1', ()=> {
    let service: EmailSettingsGrpcServiceV1;
    let client: EmailSettingsGrpcClientV1;
    let fixture: EmailSettingsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EmailSettingsMemoryPersistence();
        let controller = new EmailSettingsController();

        service = new EmailSettingsGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-emailsettings', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-emailsettings', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-emailsettings', 'service', 'grpc', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new EmailSettingsGrpcClientV1();
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
