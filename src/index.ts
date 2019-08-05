import { ExampleServer } from "./server/ExampleServer";


new ExampleServer({
    APP_BUILD: 1,
    APP_VERSION: '1.0.0',
    SERVICE_NAME: 'Test Service',
    PORT: 8000
});