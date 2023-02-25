"use strict";
/* eslint-disable curly */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLiveChat = exports.getCapsuleList = exports.getChats = exports.getUsers = exports.getRelations = exports.getMe = void 0;
var db_1 = require("./db");
var db_2 = require("./db");
var db_3 = require("./db");
var db_2_1 = require("./db-2");
var db_4 = require("./db");
var db_2_2 = require("./db-2");
var getMe = function (req, res) {
    res.status(200).json({ payload: db_1.ME });
};
exports.getMe = getMe;
var getRelations = function (req, res) {
    res.status(200).json({ payload: db_2.RELATIONS });
};
exports.getRelations = getRelations;
var getUsers = function (req, res) {
    res.status(200).json({ payload: db_3.USERS });
};
exports.getUsers = getUsers;
var getChats = function (req, res) {
    // http://localhost:9000/api/chats/v1/5033f88772:83ac211947/?offset=5&limit=7
    var chatId = req.params.chatId;
    var _a = req.query, offset = _a.offset, limit = _a.limit;
    if (!offset || !offset || !limit)
        return res.status(200).json({ payload: null });
    // const offset = 2;
    // const limit = offset + 3;
    // const arr = [10,20,30,40,50,60,70,80,90];
    // arr.slice(offset, limit) // (3) [30, 40, 50]
    var time = 1000;
    if (+offset > 0)
        time = 1000;
    setTimeout(function () {
        var _a, _b, _c, _d;
        var messages = ((_d = (_c = (_b = (_a = db_2_1.CHATS[chatId]) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 : _b.slice()) === null || _c === void 0 ? void 0 : _c.reverse()) === null || _d === void 0 ? void 0 : _d.slice(+offset, +offset + +limit).reverse()) || [];
        res.status(200).json({ payload: messages });
    }, time);
};
exports.getChats = getChats;
var getCapsuleList = function (req, res) {
    res.status(200).json({ payload: db_4.CAPSULE_LIST });
};
exports.getCapsuleList = getCapsuleList;
var getLiveChat = function (req, res) {
    res.status(200).json({ payload: db_2_2.LIVE_CHAT });
};
exports.getLiveChat = getLiveChat;
