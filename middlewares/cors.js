"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
var cors = function (settings) {
    return function (req, res, next) {
        var _a, _b;
        var origin = req.headers.origin;
        if (origin && ((_a = settings === null || settings === void 0 ? void 0 : settings.origins) === null || _a === void 0 ? void 0 : _a.includes(origin))) {
            res.setHeader("Access-Control-Allow-Origin", origin);
            if (req.method === "OPTIONS") {
                res.setHeader("Access-Control-Allow-Methods", ((_b = settings.methods) === null || _b === void 0 ? void 0 : _b.join(",")) || "GET,HEAD,PUT,PATCH,POST,DELETE");
                if (settings.headers) {
                    res.setHeader("Access-Control-Allow-Headers", settings.headers.join(","));
                }
                if (settings.credentials) {
                    res.setHeader("Access-Control-Allow-Credentials", String(settings.credentials));
                }
                if (settings.maxAge) {
                    res.setHeader("Access-Control-Max-Age", String(settings.maxAge));
                }
                return res.status(200).end();
            }
            return next();
        }
        return res.status(403).json({ error: "Forbidden" });
    };
};
exports.cors = cors;
