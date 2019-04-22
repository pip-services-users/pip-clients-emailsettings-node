let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-node';
import { EmailSettingsV1 } from '../../src/version1/EmailSettingsV1';
import { IEmailSettingsClientV1 } from '../../src/version1/IEmailSettingsClientV1';

let SETTINGS = <EmailSettingsV1> {
    id: '1',
    name: 'User 1',
    email: 'user1@conceptual.vision',
    language: 'en',
    verified: false
};

export class EmailSettingsClientFixtureV1 {
    private _client: IEmailSettingsClientV1;
    
    constructor(client: IEmailSettingsClientV1) {
        this._client = client;
    }

    public testCrudOperations(done) {
        var settings1: EmailSettingsV1;

        async.series([
        // Create email settings
            (callback) => {
                this._client.setSettings(
                    null,
                    SETTINGS,
                    (err, settings) => {
                        assert.isNull(err);
                        
                        assert.isObject(settings);
                        assert.equal(settings.id, SETTINGS.id);
                        assert.equal(settings.email, SETTINGS.email);
                        assert.isFalse(settings.verified);

                        settings1 = settings;

                        callback();
                    }
                );
            },
        // Update verified email settings
        (callback) => {
            this._client.setVerifiedSettings(
                null,
                settings1,
                (err, settings) => {
                    assert.isNull(err);
                    
                    assert.isObject(settings);
                    assert.equal(settings.id, SETTINGS.id);
                    assert.equal(settings.email, SETTINGS.email);
                    assert.isTrue(settings.verified);

                    settings1 = settings;

                    callback();
                }
            );
        },
    // Update the email settings
            (callback) => {
                settings1.subscriptions.engagement = true;

                this._client.setSettings(
                    null,
                    settings1,
                    (err, settings) => {
                        assert.isNull(err);
                        
                        assert.isObject(settings);
                        assert.isTrue(settings.subscriptions.engagement);

                        settings1 = settings;

                        callback();
                    }
                );
            },
        // Get settings
            (callback) => {
                this._client.getSettingsByIds(
                    null,
                    [ settings1.id ],
                    (err, settings) => {
                        assert.isNull(err);
                        
                        assert.lengthOf(settings, 1);

                        callback();
                    }
                );
            },
        // Delete settings
            (callback) => {
                this._client.deleteSettingsById(
                    null,
                    settings1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get deleted settings
            (callback) => {
                this._client.getSettingsById(
                    null,
                    settings1.id,
                    (err, settings) => {
                        assert.isNull(err);
                        
                        assert.isNull(settings || null);

                        callback();
                    }
                );
            }
        ], done);
    }
        
}
