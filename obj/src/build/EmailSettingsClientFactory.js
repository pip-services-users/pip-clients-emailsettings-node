"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const EmailSettingsNullClientV1_1 = require("../version1/EmailSettingsNullClientV1");
const EmailSettingsMemoryClientV1_1 = require("../version1/EmailSettingsMemoryClientV1");
const EmailSettingsDirectClientV1_1 = require("../version1/EmailSettingsDirectClientV1");
const EmailSettingsHttpClientV1_1 = require("../version1/EmailSettingsHttpClientV1");
const EmailSettingsLambdaClientV1_1 = require("../version1/EmailSettingsLambdaClientV1");
const EmailSettingsCommandableGrpcClientV1_1 = require("../version1/EmailSettingsCommandableGrpcClientV1");
const EmailSettingsGrpcClientV1_1 = require("../version1/EmailSettingsGrpcClientV1");
class EmailSettingsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(EmailSettingsClientFactory.NullClientV1Descriptor, EmailSettingsNullClientV1_1.EmailSettingsNullClientV1);
        this.registerAsType(EmailSettingsClientFactory.MemoryClientV1Descriptor, EmailSettingsMemoryClientV1_1.EmailSettingsMemoryClientV1);
        this.registerAsType(EmailSettingsClientFactory.DirectClientV1Descriptor, EmailSettingsDirectClientV1_1.EmailSettingsDirectClientV1);
        this.registerAsType(EmailSettingsClientFactory.HttpClientV1Descriptor, EmailSettingsHttpClientV1_1.EmailSettingsHttpClientV1);
        this.registerAsType(EmailSettingsClientFactory.LambdaClientV1Descriptor, EmailSettingsLambdaClientV1_1.EmailSettingsLambdaClientV1);
        this.registerAsType(EmailSettingsClientFactory.CommandableGrpcClientV1Descriptor, EmailSettingsCommandableGrpcClientV1_1.EmailSettingsCommandableGrpcClientV1);
        this.registerAsType(EmailSettingsClientFactory.GrpcClientV1Descriptor, EmailSettingsGrpcClientV1_1.EmailSettingsGrpcClientV1);
    }
}
EmailSettingsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-emailsettings', 'factory', 'default', 'default', '1.0');
EmailSettingsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-emailsettings', 'client', 'null', 'default', '1.0');
EmailSettingsClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-emailsettings', 'client', 'memory', 'default', '1.0');
EmailSettingsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-emailsettings', 'client', 'direct', 'default', '1.0');
EmailSettingsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-emailsettings', 'client', 'http', 'default', '1.0');
EmailSettingsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-emailsettings', 'client', 'lambda', 'default', '1.0');
EmailSettingsClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-emailsettings', 'client', 'commandable-grpc', 'default', '1.0');
EmailSettingsClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-emailsettings', 'client', 'grpc', 'default', '1.0');
exports.EmailSettingsClientFactory = EmailSettingsClientFactory;
//# sourceMappingURL=EmailSettingsClientFactory.js.map