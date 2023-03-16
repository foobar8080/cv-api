"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var get_route_1 = require("./get.route");
var cors = require("cors");
var app = (0, express_1.default)();
// ===================== 0
// CORS settings
var origins = [
    "https://capsuleverse.com",
    "https://capsuleverse-test1.web.app",
];
app.use(cors({ origins: origins }));
// Allow unauthorized users to use this route only if they make a request to it from a client site
app.get("/api/capsule-list/v1", function (req, res, next) {
    var origin = req.headers.origin;
    if (!origin || !origins.includes(origin)) {
        return res.status(403).send("Forbidden");
    }
    next();
});
// ===================== 1
/*
=====================
Blacklisted IP check
=====================
Checks the IP address of the incoming request against a list of blacklisted IP addresses.
*/
// const ipBlacklist = ["1.2.3.4", "5.6.7.8", "9.10.11.12"];
// function blockIPs(req: Request, res: Response, next: NextFunction) {
//   const ip = "client-public-ip";
//   if (ipBlacklist.includes(ip)) return res.status(403).send("Forbidden");
//   next();
// }
// app.use(blockIPs);
// ===================== 2
// app.use("/api/capsule-list/v1", (req, res, next) => {
//   /*
//   ==================================
//   Get IP address of the client site
//   ==================================
//   This middleware is allowing unauthorized users to use the API only if they make a request to it from a client site
//   */
//   const referer = req.headers.referer;
//   if (!referer) return res.status(403).send("Forbidden");
//   const hostname = new URL(referer).hostname;
//   dns.resolve4(hostname, (err: any, addresses: any) => {
//     if (err || addresses.length === 0) return res.status(403).send("Forbidden");
//     const clientIP = "199.36.158.100"; // IP of firebase client site
//     const clientIPCandidate = addresses[0];
//     if (clientIP !== clientIPCandidate)
//       return res.status(403).send("Forbidden");
//     next();
//   });
// });
// ===================== 3
// app.get("/", (req, res) => {
//   /*
//   ===========================================
//   Get public IP address of the client device
//   ===========================================
//   We're using the req.headers['x-forwarded-for'] property to get the public IP address of the client device (it could also be the IP address of an intermediary proxy or load balancer).
//   If this header is not present (i.e., if the request did not go through a proxy), we fall back to the req.socket.remoteAddress property, which should contain the IP address of the client device.
//   Note that the x-forwarded-for header can contain multiple IP addresses if the request passed through multiple proxies, so you may need to extract the first IP address from the list to get the actual client IP address.
//   Also, keep in mind that relying on the x-forwarded-for header for security-critical applications can be risky, as it can be spoofed by malicious users. Therefore, you should always validate and sanitize user input based on this header.
//   */
//   const clientPublicIP =
//     req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//   res.send(clientPublicIP);
// });
// =====================
app.route("/api/capsule-list/v1").get(get_route_1.getCapsuleList);
app.route("/api/me/v1").get(get_route_1.getMe);
app.route("/api/relations/v1").get(get_route_1.getRelations);
app.route("/api/chats/v1/:chatId").get(get_route_1.getChats);
app.route("/api/users/v1").get(get_route_1.getUsers);
app.route("/api/live-chat/v1").get(get_route_1.getLiveChat);
var httpServer = app.listen(9000, function () {
    console.log("HTTP REST API Server running at http://localhost:" +
        httpServer.address().port);
});
