"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const test_route_1 = require("./routes/test.route");
const server = new server_1.Server();
const testRoute = new test_route_1.default();
server.addRoute('/test', testRoute.router);
server.start();
//# sourceMappingURL=app.js.map