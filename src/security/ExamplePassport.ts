import { Passport } from "node-express-microservice";
import {Request} from "express";

/**
 * The custom passport
 * Used to verify requests
 */
export class ExamplePassport extends Passport {

    /**
     * Allow all requests that contain the word allow in the auth header
     * @param request - The request item
     * @return {boolean} - True if they're allowed or false otherwise
     */
    public async verifyRequest(request: Request) {
        if(request.headers && request.headers.authorization) {
            const auth = request.headers.authorization;
            // Decode the token, here we just look for the word allow
            return auth.indexOf("allow") > -1;
        } else {
            return false;
        }
    }

}