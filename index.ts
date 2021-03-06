import Server from "./clases/server";
import { SERVER_PORT } from "./global/environment";
import router from "./routes/router";
import bodyParser from 'body-parser';
import cors from 'cors';
const server = Server.instance;

// Body parser
server.app.use( bodyParser.urlencoded({extended: true}) );
server.app.use( bodyParser.json());

// Cors
server.app.use(cors({
    origin: true,
    credentials: true
}));

// Rutas de servicios
server.app.use('/', router);
server.start(() => {
    console.log(`Servidor inicializado en el puerto ${SERVER_PORT}`)
});
