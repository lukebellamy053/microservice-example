import { Controller, HTTPController, loadActiveUser, Get } from "node-express-microservice";

@HTTPController({
    path: '/users',
    protected: true,
    authenticationHandler: async (controller: SteveController) => {
        // Only allow users with an email that contains steve
        return controller.activeUser.email.indexOf("steve") > -1;
    }
})
/**
 * An HTTP Controller that will only allow users with an email address containing the word steve to access the methods
 */
export class SteveController extends Controller implements loadActiveUser {
    
    /**
     * Load the active user
     * Randomly chooses between tom and steve
     * Method can also return a promise for more complex operations
     */
    loadActiveUser() {
        const val = Math.random();
        if(val < 0.5) {
            return {
                email: 'steve@gmail.com'
            }
        } else {
            return {
                email: 'tom@gmail.com'
            }
        }
        /**
         * Real example:
         * Get the token from this.req.headers.authorization
         * Extract the user information from the token
         * Get the user object from the database
         * Return the user
         */
    }


    /**
     * Get the active user
     */
    @Get('/me')
    public async getData() {
        return this.activeUser;
    }


}