"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailSettingsNullClientV1 {
    getSettingsByIds(correlationId, recipientIds, callback) {
        callback(null, []);
    }
    getSettingsById(correlationId, recipientId, callback) {
        callback(null, null);
    }
    getSettingsByEmailSettings(correlationId, email, callback) {
        callback(null, null);
    }
    setSettings(correlationId, settings, callback) {
        if (callback)
            callback(null, settings);
    }
    setVerifiedSettings(correlationId, settings, callback) {
        if (callback)
            callback(null, settings);
    }
    setRecipient(correlationId, recipientId, name, email, language, callback) {
        if (callback) {
            callback(null, {
                id: recipientId,
                name: name,
                email: email,
                language: language,
                verified: false
            });
        }
    }
    setSubscriptions(correlationId, recipientId, subscriptions, callback) {
        if (callback) {
            callback(null, {
                id: recipientId,
                name: null,
                email: null,
                language: null,
                subscriptions: subscriptions
            });
        }
    }
    deleteSettingsById(correlationId, recipientId, callback) {
        if (callback)
            callback(null);
    }
    resendVerification(correlationId, recipientId, callback) {
        if (callback)
            callback(null);
    }
    verifyEmail(correlationId, recipientId, code, callback) {
        if (callback)
            callback(null);
    }
}
exports.EmailSettingsNullClientV1 = EmailSettingsNullClientV1;
//# sourceMappingURL=EmailSettingsNullClientV1.js.map