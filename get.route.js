"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCapsuleFeed = exports.getUsers = exports.getRelations = exports.getMe = void 0;
var db_1 = require("./db");
var db_2 = require("./db");
var db_3 = require("./db");
var db_4 = require("./db");
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
var getCapsuleFeed = function (req, res) {
    res.status(200).json({ payload: db_4.CAPSULE_FEED });
};
exports.getCapsuleFeed = getCapsuleFeed;
