"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class TestRoute {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.route('/')
            .get(this.test.bind(this));
    }
    test(request, response) {
        console.log("23456");
        response.status(404).json({ text: "hello" });
    }
}
exports.default = TestRoute;
//# sourceMappingURL=test.route.js.map