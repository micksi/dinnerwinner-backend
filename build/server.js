"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
class Server {
    constructor(port = '8080') {
        this.port = port;
        this.routes = [];
        this.app = express();
        this.port = port;
        this.app.set('port', this.port);
        this.config();
    }
    config() {
        this.app.use(express.json());
        this.server = http.createServer(this.app);
    }
    addRoute(routeUrl, routerHandler) {
        if (this.routes.indexOf(routerHandler) === -1) {
            this.routes.push();
            this.app.use(routeUrl, routerHandler);
        }
    }
    start() {
        this.server.listen(this.app.get('port'), () => {
            console.log(`App is running at:
http://localhost:${this.port} in ${this.app.get('env')} mode`);
            console.log('  Press CTRL-C to stop\n');
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map