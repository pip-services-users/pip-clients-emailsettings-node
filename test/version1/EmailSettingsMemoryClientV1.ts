let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { IEmailSettingsClientV1 } from '../../src/version1/IEmailSettingsClientV1';
import { EmailSettingsMemoryClientV1 } from '../../src/version1/EmailSettingsMemoryClientV1';
import { EmailSettingsClientFixtureV1 } from './EmailSettingsClientFixtureV1';

suite('EmailSettingsMemoryClientV1', ()=> {
    let client: EmailSettingsMemoryClientV1;
    let fixture: EmailSettingsClientFixtureV1;

    suiteSetup(() => {
        client = new EmailSettingsMemoryClientV1();

        fixture = new EmailSettingsClientFixtureV1(client);
    });
    
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
