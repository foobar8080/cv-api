"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require("cors");
var express_1 = __importDefault(require("express"));
var get_route_1 = require("./get.route");
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
app.get("/", function (req, res) {
    res.send(req.ip);
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
