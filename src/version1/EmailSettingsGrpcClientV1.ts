let _ = require('lodash');
let services = require('../../../src/protos/emailsettings_v1_grpc_pb');
let messages = require('../../../src/protos/emailsettings_v1_pb');

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { GrpcClient } from 'pip-services3-grpc-node';

import { IEmailSettingsClientV1 } from './IEmailSettingsClientV1';
import { EmailSettingsV1 } from './EmailSettingsV1';
import { EmailSettingsGrpcConverterV1 } from './EmailSettingsGrpcConverterV1';

export class EmailSettingsGrpcClientV1 extends GrpcClient implements IEmailSettingsClientV1 {
    private _defaultParameters: ConfigParams;

    public constructor(config?: any) {
        super(services.EmailSettingsxClient);

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public getSettingsByIds(correlationId: string, recipientIds: string[],
        callback: (err: any, settings: EmailSettingsV1[]) => void): void {
        let request = new messages.EmailSettingsIdsRequest();

        request.setRecipientIdsList(recipientIds);

        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_ids');

        this.call('get_settings_by_ids',
            correlationId, 
            request,
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = EmailSettingsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? EmailSettingsGrpcConverterV1.toEmailSettingsList(response.getSettingsList())
                    : null;

                callback(err, result);
            }
        );
    }

    public getSettingsById(correlationId: string, recipientId: string,
        callback: (err: any, settings: EmailSettingsV1) => void): void {
        let request = new messages.EmailSettingsIdRequest();

        request.setRecipientId(recipientId);

        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_id');

        this.call('get_settings_by_id',
            correlationId, 
            request,
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = EmailSettingsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings())
                    : null;

                callback(err, result);
            }
        );
    }

    public getSettingsByEmail(correlationId: string, email: string,
        callback: (err: any, settings: EmailSettingsV1) => void): void {
        let request = new messages.EmailSettingsEmailRequest();

        request.setEmail(email);

        let timing = this.instrument(correlationId, 'email_settings.get_settings_by_email');

        this.call('get_settings_by_email',
            correlationId, 
            request,
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = EmailSettingsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings())
                    : null;

                callback(err, result);
            }
        );
    }

    public setSettings(correlationId: string, settings: EmailSettingsV1,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        let request = new messages.EmailSettingsObjectRequest();

        request.setSettings(EmailSettingsGrpcConverterV1.fromEmailSettings(settings));

        let timing = this.instrument(correlationId, 'email_settings.set_settings');

        this.call('set_settings',
            correlationId, 
            request,
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = EmailSettingsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings())
                    : null;

                callback(err, result);
            }
        );
    }

    public setVerifiedSettings(correlationId: string, settings: EmailSettingsV1,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        let request = new messages.EmailSettingsObjectRequest();

        request.setSettings(EmailSettingsGrpcConverterV1.fromEmailSettings(settings));

        let timing = this.instrument(correlationId, 'email_settings.set_verified_settings');

        this.call('set_verified_settings',
            correlationId, 
            request,
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = EmailSettingsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings())
                    : null;

                callback(err, result);
            }
        );
    }

    public setRecipient(correlationId: string, recipientId: string,
        name: string, email: string, language: string,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        let request = new messages.EmailSettingsRecipientRequest();
        request.setRecipientId(recipientId);
        request.setName(name);
        request.setEmail(email);
        request.setLanguage(language);

        let timing = this.instrument(correlationId, 'email_settings.set_recipient');

        this.call('set_recipient',
            correlationId, 
            request,
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = EmailSettingsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings())
                    : null;

                callback(err, result);
            }
        );
    }

    public setSubscriptions(correlationId: string, recipientId: string, subscriptions: any,
        callback?: (err: any, settings: EmailSettingsV1) => void): void {
        let request = new messages.EmailSettingsSubscriptionsRequest();
        request.setRecipientId(recipientId);
        request.setSubscriptions(EmailSettingsGrpcConverterV1.toJson(subscriptions));

        let timing = this.instrument(correlationId, 'email_settings.set_subscriptions');

        this.call('set_subscriptions',
            correlationId, 
            request,
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = EmailSettingsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? EmailSettingsGrpcConverterV1.toEmailSettings(response.getSettings())
                    : null;

                callback(err, result);
            }
        );
    }

    public deleteSettingsById(correlationId: string, recipientId: string,
        callback?: (err: any) => void): void {
        let request = new messages.EmailSettingsIdRequest();
        request.setRecipientId(recipientId);

        let timing = this.instrument(correlationId, 'email_settings.delete_settings_by_id');

        this.call('delete_settings_by_id',
            correlationId, 
            request,
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = EmailSettingsGrpcConverterV1.toError(response.error);

                callback(err);
            }
        );
    }

    public resendVerification(correlationId: string, recipientId: string,
        callback?: (err: any) => void): void {
        let request = new messages.EmailSettingsIdRequest();
        request.setRecipientId(recipientId);

        let timing = this.instrument(correlationId, 'email_settings.resend_verification');

        this.call('resend_verification',
            correlationId, 
            request,
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = EmailSettingsGrpcConverterV1.toError(response.error);

                callback(err);
            }
        );
    }
  
    public verifyEmail(correlationId: string, recipientId: string, code: string,
        callback?: (err: any) => void): void {
        let request = new messages.EmailSettingsVerifyRequest();
        request.setRecipientId(recipientId);
        request.setCode(code);

        let timing = this.instrument(correlationId, 'email_settings.verify_email');

        this.call('verify_email',
            correlationId, 
            request,
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = EmailSettingsGrpcConverterV1.toError(response.error);

                callback(err);
            }
        );
    }

}
