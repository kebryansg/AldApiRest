import "reflect-metadata";
import {createExpressServer} from "routing-controllers";
import {ClienteController, ProductoController} from "./controller/index.controller";
import {createConnection} from "typeorm";

let {settings} = require('../assets/init.js');

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    // creates express app, registers all controller routes and returns you express app instance
    const app = createExpressServer({
        defaultErrorHandler: false,
        cors: true,
        controllers: [
            ProductoController,
            ClienteController
        ] // we specify controllers we want to use
    });

    // run express application on port 3000
    app.listen(settings.port, () => {
        console.log(`server started at http://localhost:${settings.port}`);
    });

}).catch(error => console.log("TypeORM connection error: ", error));
