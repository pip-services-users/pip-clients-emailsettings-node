import { ConfigParams } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IEmailSettingsClientV1 } from './IEmailSettingsClientV1';
import { EmailSettingsV1 } from './EmailSettingsV1';

//import { IEmailSettingsController } from 'pip-services-emailsettings-node';

export class EmailSettingsDirectClientV1 extends DirectClient<any> implements IEmailSettingsClientV1 {
    private _defaultParameters: ConfigParams;

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-emailsettings", "controller", "*", "*", "*"));

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }
    
    public getSettingsByIds(correlationId: string, recipientIds: string[],
        callback: (err: any, settings: EmailSettingsV1[]) => void): void {
        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_ids');
        this._controller.getSettingsByIds(correlationId, recipientIds, (err, settings) => {
            timing.endTiming();
            callback(err, settings);
        });
    }

    public getSettingsById(correlationId: string, recipientId: string,
        callback: (err: any, settings: EmailSettingsV1) => void): void {
        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_id');
        this._controller.getSettingsById(correlationId, recipientId, (err, settings) => {
            timing.endTiming();
            callback(err, settings);
        });
    }

    public getSettingsByEmail(correlationId: string, email: string,
        callback: (err: any, settings: EmailSettingsV1) => void): void {
        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_email');
        this._controller.getSettingsByEmail(correlationId, email, (err, settings) => {
            timing.endTiming();
            callback(err, settings);
        });
    }

    public setSettings(correlationId: string, settings: EmailSettingsV1,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        let timing = this.instrument(correlationId, 'email_settings.set_settings');
        this._controller.setSettings(correlationId, settings, (err, settings) => {
            timing.endTiming();
            if (callback) callback(err, settings);
        });
    }

    public setVerifiedSettings(correlationId: string, settings: EmailSettingsV1,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        let timing = this.instrument(correlationId, 'email_settings.set_verified_settings');
        this._controller.setVerifiedSettings(correlationId, settings, (err, settings) => {
            timing.endTiming();
            if (callback) callback(err, settings);
        });
    }

    public setRecipient(correlationId: string, recipientId: string,
        name: string, email: string, language: string,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        let timing = this.instrument(correlationId, 'email_settings.set_recipient');
        this._controller.setRecipient(
            correlationId, recipientId, name, email, language, 
            (err, settings) => {
                timing.endTiming();
                if (callback) callback(err, settings);
            }
        );
    }

    public setSubscriptions(correlationId: string, recipientId: string, subscriptions: any,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        let timing = this.instrument(correlationId, 'email_settings.set_subscriptions');
        this._controller.setSubscriptions(correlationId, recipientId, subscriptions, (err, settings) => {
            timing.endTiming();
            if (callback) callback(err, settings);
        });
    }

    public deleteSettingsById(correlationId: string, recipientId: string,
        callback?: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'email_settings.delete_settings_by_id');
        this._controller.deleteSettingsById(correlationId, recipientId, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }

    public resendVerification(correlationId: string, recipientId: string,
        callback?: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'email_settings.resend_verification');
        this._controller.resendVerification(correlationId, recipientId, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }

    public verifyEmail(correlationId: string, recipientId: string, code: string,
        callback?: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'email_settings.verify_email');
        this._controller.verifyEmail(correlationId, recipientId, code, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }

}