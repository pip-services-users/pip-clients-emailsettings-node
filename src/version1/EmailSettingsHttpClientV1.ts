import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableHttpClient } from 'pip-services-net-node';

import { EmailSettingsV1 } from './EmailSettingsV1';
import { IEmailSettingsClientV1 } from './IEmailSettingsClientV1';

export class EmailSettingsHttpClientV1 extends CommandableHttpClient implements IEmailSettingsClientV1 {
    private _defaultParameters: ConfigParams;

    constructor(config?: any) {
        super('email_settings');

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public getSettingsByIds(correlationId: string, recipientIds: string[],
        callback: (err: any, settings: EmailSettingsV1[]) => void): void {
        this.callCommand(
            'get_settings_by_ids',
            correlationId,
            {
                recipient_ids: recipientIds
            },
            callback
        );
    }

    public getSettingsById(correlationId: string, recipientId: string,
        callback: (err: any, settings: EmailSettingsV1) => void): void {
        this.callCommand(
            'get_settings_by_id',
            correlationId,
            {
                recipient_id: recipientId
            },
            callback
        );
    }

    public getSettingsByEmailSettings(correlationId: string, email: string,
        callback: (err: any, settings: EmailSettingsV1) => void): void {
        this.callCommand(
            'get_settings_by_email',
            correlationId,
            {
                email: email
            },
            callback
        );
    }

    public setSettings(correlationId: string, settings: EmailSettingsV1,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        this.callCommand(
            'set_settings',
            correlationId,
            {
                settings: settings
            },
            callback
        );
    }

    public setVerifiedSettings(correlationId: string, settings: EmailSettingsV1,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        this.callCommand(
            'set_verified_settings',
            correlationId,
            {
                settings: settings
            },
            callback
        );
    }

    public setRecipient(correlationId: string, recipientId: string,
        name: string, email: string, language: string,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        this.callCommand(
            'set_recipient',
            correlationId,
            {
                recipient_id: recipientId,
                name: name,
                email: email,
                language: language
            },
            callback
        );
    }

    public setSubscriptions(correlationId: string, recipientId: string, subscriptions: any,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        this.callCommand(
            'set_subscriptions',
            correlationId,
            {
                recipient_id: recipientId,
                subscriptions: subscriptions
            },
            callback
        );
    }

    public deleteSettingsById(correlationId: string, recipientId: string,
        callback?: (err: any) => void): void {
        this.callCommand(
            'delete_settings_by_id',
            correlationId,
            {
                recipient_id: recipientId
            },
            callback
        );
    }

    public resendVerification(correlationId: string, recipientId: string,
        callback?: (err: any) => void): void {
        this.callCommand(
            'resend_verification',
            correlationId,
            {
                recipient_id: recipientId
            },
            callback
        );
    }

    public verifyEmail(correlationId: string, recipientId: string, code: string,
        callback?: (err: any) => void): void {
        this.callCommand(
            'verify_email',
            correlationId,
            {
                recipient_id: recipientId,
                code: code
            },
            callback
        );
    }
}
