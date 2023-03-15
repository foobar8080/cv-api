"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
var cors = function (settings) {
    return function (req, res, next) {
        var _a;
        var origin = req.headers.origin;
        res.setHeader("X-XXX", origin || "hello");
        if (origin && ((_a = settings === null || settings === void 0 ? void 0 : settings.origins) === null || _a === void 0 ? void 0 : _a.includes(origin))) {
            res.setHeader("Access-Control-Allow-Origin", origin);
            if (settings.methods) {
                res.setHeader("Access-Control-Allow-Methods", settings.methods.join(","));
            }
            if (settings.headers) {
                res.setHeader("Access-Control-Allow-Headers", settings.headers.join(","));
            }
            if (settings.credentials) {
                res.setHeader("Access-Control-Allow-Credentials", String(settings.credentials));
            }
            if (settings.maxAge) {
                res.setHeader("Access-Control-Max-Age", String(settings.maxAge));
            }
        }
        else {
            return res.status(403).json({ error: "Forbidden" });
        }
        // Handle preflight requests
        if (req.method === "OPTIONS") {
            return res.sendStatus(204);
        }
        else {
            next();
        }
    };
};
exports.cors = cors;
