"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_grpc_node_1 = require("pip-services3-grpc-node");
class EmailSettingsCommandableGrpcClientV1 extends pip_services3_grpc_node_1.CommandableGrpcClient {
    constructor(config) {
        super('v1/email_settings');
        let thisConfig = pip_services3_commons_node_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    getSettingsByIds(correlationId, recipientIds, callback) {
        this.callCommand('get_settings_by_ids', correlationId, {
            recipient_ids: recipientIds
        }, callback);
    }
    getSettingsById(correlationId, recipientId, callback) {
        this.callCommand('get_settings_by_id', correlationId, {
            recipient_id: recipientId
        }, callback);
    }
    getSettingsByEmail(correlationId, email, callback) {
        this.callCommand('get_settings_by_email', correlationId, {
            email: email
        }, callback);
    }
    setSettings(correlationId, settings, callback) {
        this.callCommand('set_settings', correlationId, {
            settings: settings
        }, callback);
    }
    setVerifiedSettings(correlationId, settings, callback) {
        this.callCommand('set_verified_settings', correlationId, {
            settings: settings
        }, callback);
    }
    setRecipient(correlationId, recipientId, name, email, language, callback) {
        this.callCommand('set_recipient', correlationId, {
            recipient_id: recipientId,
            name: name,
            email: email,
            language: language
        }, callback);
    }
    setSubscriptions(correlationId, recipientId, subscriptions, callback) {
        this.callCommand('set_subscriptions', correlationId, {
            recipient_id: recipientId,
            subscriptions: subscriptions
        }, callback);
    }
    deleteSettingsById(correlationId, recipientId, callback) {
        this.callCommand('delete_settings_by_id', correlationId, {
            recipient_id: recipientId
        }, callback);
    }
    resendVerification(correlationId, recipientId, callback) {
        this.callCommand('resend_verification', correlationId, {
            recipient_id: recipientId
        }, callback);
    }
    verifyEmail(correlationId, recipientId, code, callback) {
        this.callCommand('verify_email', correlationId, {
            recipient_id: recipientId,
            code: code
        }, callback);
    }
}
exports.EmailSettingsCommandableGrpcClientV1 = EmailSettingsCommandableGrpcClientV1;
//# sourceMappingURL=EmailSettingsCommandableGrpcClientV1.js.map