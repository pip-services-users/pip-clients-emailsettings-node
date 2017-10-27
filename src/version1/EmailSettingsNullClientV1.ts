import { ConfigParams } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams} from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';

import { IEmailSettingsClientV1 } from './IEmailSettingsClientV1';
import { EmailSettingsV1 } from './EmailSettingsV1';

export class EmailSettingsNullClientV1 implements IEmailSettingsClientV1 {

    public getSettingsByIds(correlationId: string, recipientIds: string[],
        callback: (err: any, settings: EmailSettingsV1[]) => void): void {
        callback(null, []);
    }

    public getSettingsById(correlationId: string, recipientId: string,
        callback: (err: any, settings: EmailSettingsV1) => void): void {
        callback(null, null);
    }

    public getSettingsByEmailSettings(correlationId: string, email: string,
        callback: (err: any, settings: EmailSettingsV1) => void): void {
        callback(null, null);
    }

    public setSettings(correlationId: string, settings: EmailSettingsV1,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        if (callback) callback(null, settings);
    }

    public setRecipient(correlationId: string, recipientId: string,
        name: string, email: string, language: string,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        if (callback) {
            callback(null, <EmailSettingsV1> { 
                id: recipientId,
                name: name,
                email: email,
                language: language,
                verified: false 
            });
        }
    }

    public setSubscriptions(correlationId: string, recipientId: string, subscriptions: any,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        if (callback) {
            callback(null, <EmailSettingsV1> {
                id: recipientId,
                name: null,
                email: null,
                language: null,
                subscriptions: subscriptions
            });
        }
    }

    public deleteSettingsById(correlationId: string, recipientId: string,
        callback?: (err: any) => void): void {
        if (callback) callback(null);
    }

    public resendVerification(correlationId: string, recipientId: string,
        callback?: (err: any) => void): void {
        if (callback) callback(null);
    }

    public verifyEmail(correlationId: string, recipientId: string, code: string,
        callback?: (err: any) => void): void {
        if (callback) callback(null);
    }

}