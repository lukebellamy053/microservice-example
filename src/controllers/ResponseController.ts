import { HTMLController, Get } from "node-express-microservice";

/**
 * Register the HTML views
 */
export class ResponseController extends HTMLController {
       

    /**
     * Return the name provided
     * @param name 
     */
    @Get('/name/:name')
    public async testRoute(name: string) {
        this.res.render('pages/index', {
            name: name
        });
        return null;
    }

}