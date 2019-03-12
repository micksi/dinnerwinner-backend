import { Server } from "./server";
import TestRoute from "./routes/test.route";

const server = new Server();

const testRoute = new TestRoute();

server.addRoute('/test', testRoute.router);

server.start();
