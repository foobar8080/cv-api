"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require("cors");
var express_1 = __importDefault(require("express"));
var get_route_1 = require("./get.route");
var dns = require("dns");
var app = (0, express_1.default)();
// app.use((req, res, next) => {
//   // Set allowed origins
//   const allowedOrigins = ["https://capsuleverse-test.web.app"];
//   // Get the request's origin header
//   const requestOrigin = req.headers.origin as string;
//   // Check if the request's origin is allowed
//   if (allowedOrigins.includes(requestOrigin)) {
//     // Set the response headers to allow the request's origin
//     res.setHeader("Access-Control-Allow-Origin", requestOrigin);
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Content-Type, Authorization"
//     );
//   }
//   // Handle preflight requests
//   if (req.method === "OPTIONS") {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// });
// -----------------------------
// app.use((req, res, next) => {
//   const apiKeys = ["1234"];
//   const allowedOrigins = ["https://capsuleverse-test.web.app"];
//   const origin = req.headers.origin as string;
//   const referer = req.headers.referer as string;
//   const apiKey = req.headers["x-api-key"] as string;
//   if (
//     allowedOrigins.includes(origin) &&
//     referer?.startsWith(`${origin}/`) &&
//     apiKeys.includes(apiKey)
//   ) {
//     res.header("Access-Control-Allow-Origin", origin);
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     next();
//   }
//   res.status(403).send("Access Forbidden");
// });
// app.post("/", (req: Request, res: Response, next: NextFunction) => {
//   return res.send("hello");
// });
// -------------------------
// // set up a whitelist of allowed origins
// const whitelist = ["http://example.com"];
// // use the cors middleware to only allow cross-origin requests from the whitelist
// app.use(
//   cors({
//     origin: function (origin: any, callback: any) {
//       console.log(777, origin);
//       if (!origin || whitelist.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   })
// );
app.get("/1", function (req, res) {
    /*
    We're using the req.headers['x-forwarded-for'] property to get the public IP address of the client device (it could also be the IP address of an intermediary proxy or load balancer).
    If this header is not present (i.e., if the request did not go through a proxy), we fall back to the req.socket.remoteAddress property, which should contain the IP address of the client device.
  
    Note that the x-forwarded-for header can contain multiple IP addresses if the request passed through multiple proxies, so you may need to extract the first IP address from the list to get the actual client IP address.
  
    Also, keep in mind that relying on the x-forwarded-for header for security-critical applications can be risky, as it can be spoofed by malicious users. Therefore, you should always validate and sanitize user input based on this header.
    */
    var clientPublicIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    res.send(clientPublicIP);
});
app.get("/2", function (req, res) {
    var referer = req.headers.referer;
    var hostname = new URL(referer).hostname;
    dns.resolve4(hostname, function (err, addresses) {
        if (err) {
            console.error(err);
            res.status(400).send("Bad request");
            return;
        }
        console.log("Client site IP address: ".concat(addresses[0]));
        // ...rest of your code
    });
});
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
