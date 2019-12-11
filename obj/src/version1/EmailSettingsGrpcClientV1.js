"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let services = require('../../../src/protos/emailsettings_v1_grpc_pb');
let messages = require('../../../src/protos/emailsettings_v1_pb');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_grpc_node_1 = require("pip-services3-grpc-node");
const EmailSettingsGrpcConverterV1_1 = require("./EmailSettingsGrpcConverterV1");
class EmailSettingsGrpcClientV1 extends pip_services3_grpc_node_1.GrpcClient {
    constructor(config) {
        super(services.EmailSettingsxClient);
        let thisConfig = pip_services3_commons_node_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    getSettingsByIds(correlationId, recipientIds, callback) {
        let request = new messages.EmailSettingsIdsRequest();
        request.setRecipientIdsList(recipientIds);
        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_ids');
        this.call('get_settings_by_ids', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
            let result = response
                ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettingsList(response.getSettingsList())
                : null;
            callback(err, result);
        });
    }
    getSettingsById(correlationId, recipientId, callback) {
        let request = new messages.EmailSettingsIdRequest();
        request.setRecipientId(recipientId);
        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_id');
        this.call('get_settings_by_id', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
            let result = response
                ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings())
                : null;
            callback(err, result);
        });
    }
    getSettingsByEmail(correlationId, email, callback) {
        let request = new messages.EmailSettingsEmailRequest();
        request.setEmail(email);
        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_email');
        this.call('get_settings_by_email', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
            let result = response
                ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings())
                : null;
            callback(err, result);
        });
    }
    setSettings(correlationId, settings, callback) {
        let request = new messages.EmailSettingsObjectRequest();
        request.setSettings(EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.fromEmailSettings(settings));
        let timing = this.instrument(correlationId, 'email_settings.set_settings');
        this.call('set_settings', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
            let result = response
                ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings())
                : null;
            callback(err, result);
        });
    }
    setVerifiedSettings(correlationId, settings, callback) {
        let request = new messages.EmailSettingsObjectRequest();
        request.setSettings(EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.fromEmailSettings(settings));
        let timing = this.instrument(correlationId, 'email_settings.set_verified_settings');
        this.call('set_verified_settings', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
            let result = response
                ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings())
                : null;
            callback(err, result);
        });
    }
    setRecipient(correlationId, recipientId, name, email, language, callback) {
        let request = new messages.EmailSettingsRecipientRequest();
        request.setRecipientId(recipientId);
        request.setName(name);
        request.setEmail(email);
        request.setLanguage(language);
        let timing = this.instrument(correlationId, 'email_settings.set_recipient');
        this.call('set_recipient', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
            let result = response
                ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings())
                : null;
            callback(err, result);
        });
    }
    setSubscriptions(correlationId, recipientId, subscriptions, callback) {
        let request = new messages.EmailSettingsSubscriptionsRequest();
        request.setRecipientId(recipientId);
        request.setSubscriptions(EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toJson(subscriptions));
        let timing = this.instrument(correlationId, 'email_settings.set_subscriptions');
        this.call('set_subscriptions', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
            let result = response
                ? EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings())
                : null;
            callback(err, result);
        });
    }
    deleteSettingsById(correlationId, recipientId, callback) {
        let request = new messages.EmailSettingsIdRequest();
        request.setRecipientId(recipientId);
        let timing = this.instrument(correlationId, 'email_settings.delete_settings_by_id');
        this.call('delete_settings_by_id', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
            callback(err);
        });
    }
    resendVerification(correlationId, recipientId, callback) {
        let request = new messages.EmailSettingsIdRequest();
        request.setRecipientId(recipientId);
        let timing = this.instrument(correlationId, 'email_settings.resend_verification');
        this.call('resend_verification', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
            callback(err);
        });
    }
    verifyEmail(correlationId, recipientId, code, callback) {
        let request = new messages.EmailSettingsVerifyRequest();
        request.setRecipientId(recipientId);
        request.setCode(code);
        let timing = this.instrument(correlationId, 'email_settings.verify_email');
        this.call('verify_email', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = EmailSettingsGrpcConverterV1_1.EmailSettingsGrpcConverterV1.toError(response.error);
            callback(err);
        });
    }
}
exports.EmailSettingsGrpcClientV1 = EmailSettingsGrpcClientV1;
//# sourceMappingURL=EmailSettingsGrpcClientV1.js.map