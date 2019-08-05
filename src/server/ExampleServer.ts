import {ExpressServer, PathHandler, Passport, EnvironmentConfig} from 'node-express-microservice/dist'
import { PublicController } from '../controllers/PublicController';
import { ExamplePassport } from '../security/ExamplePassport';
import { SteveController } from '../controllers/SteveController';
import { ResponseController } from '../controllers/ResponseController';


export class ExampleServer extends ExpressServer {

    public init() {
        super.init();
        Passport.passport = new ExamplePassport();
    }
   
    public paths() {
        super.paths();
        PathHandler.pathHandler.addController([PublicController, SteveController, ResponseController]);
    }

}