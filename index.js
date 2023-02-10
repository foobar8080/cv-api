"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require('cors');
var express = __importStar(require("express"));
var get_route_1 = require("./get.route");
var app = express();
app.use(cors());
app.route('/api/capsule-list/v1').get(get_route_1.getCapsuleList);
app.route('/api/me/v1').get(get_route_1.getMe);
app.route('/api/relations/v1').get(get_route_1.getRelations);
app.route('/api/chats/v1/:chatId').get(get_route_1.getChats);
app.route('/api/users/v1').get(get_route_1.getUsers);
var httpServer = app.listen(9000, function () {
    console.log('HTTP REST API Server running at http://localhost:' +
        httpServer.address().port);
});
