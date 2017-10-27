import { YamlConfigReader } from 'pip-services-commons-node';
import { EmailSettingsClientFixtureV1 } from './EmailSettingsClientFixtureV1';
import { EmailSettingsLambdaClientV1 } from '../../src/version1/EmailSettingsLambdaClientV1';

suite('EmailSettingsLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: EmailSettingsLambdaClientV1;
    let fixture: EmailSettingsClientFixtureV1;

    setup((done) => {
        client = new EmailSettingsLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new EmailSettingsClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});