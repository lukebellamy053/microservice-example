import { Controller, Get } from "node-express-microservice";

/**
 * This controller contains methods that can be accessed by anyone
 */
export class PublicController extends Controller {

    /**
     * A simple test route that returns hello world
     */
    @Get('/')
    public async getTest() {
        return 'Hello World';
    }

}