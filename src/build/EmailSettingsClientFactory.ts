import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { EmailSettingsNullClientV1 } from '../version1/EmailSettingsNullClientV1';
import { EmailSettingsMemoryClientV1 } from '../version1/EmailSettingsMemoryClientV1';
import { EmailSettingsDirectClientV1 } from '../version1/EmailSettingsDirectClientV1';
import { EmailSettingsHttpClientV1 } from '../version1/EmailSettingsHttpClientV1';
import { EmailSettingsLambdaClientV1 } from '../version1/EmailSettingsLambdaClientV1';
import { EmailSettingsCommandableGrpcClientV1 } from '../version1/EmailSettingsCommandableGrpcClientV1';
import { EmailSettingsGrpcClientV1 } from '../version1/EmailSettingsGrpcClientV1';

export class EmailSettingsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-emailsettings', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-emailsettings', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('pip-services-emailsettings', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-emailsettings', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-emailsettings', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('pip-services-emailsettings', 'client', 'lambda', 'default', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('pip-services-emailsettings', 'client', 'commandable-grpc', 'default', '1.0');
	public static GrpcClientV1Descriptor = new Descriptor('pip-services-emailsettings', 'client', 'grpc', 'default', '1.0');

	constructor() {
		super();

		this.registerAsType(EmailSettingsClientFactory.NullClientV1Descriptor, EmailSettingsNullClientV1);
		this.registerAsType(EmailSettingsClientFactory.MemoryClientV1Descriptor, EmailSettingsMemoryClientV1);
		this.registerAsType(EmailSettingsClientFactory.DirectClientV1Descriptor, EmailSettingsDirectClientV1);
		this.registerAsType(EmailSettingsClientFactory.HttpClientV1Descriptor, EmailSettingsHttpClientV1);
		this.registerAsType(EmailSettingsClientFactory.LambdaClientV1Descriptor, EmailSettingsLambdaClientV1);
		this.registerAsType(EmailSettingsClientFactory.CommandableGrpcClientV1Descriptor, EmailSettingsCommandableGrpcClientV1);
		this.registerAsType(EmailSettingsClientFactory.GrpcClientV1Descriptor, EmailSettingsGrpcClientV1);
	}
	
}
