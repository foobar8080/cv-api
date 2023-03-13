const cors = require("cors");
import express from "express";
import {
  getCapsuleList,
  getMe,
  getRelations,
  getChats,
  getUsers,
  getLiveChat,
} from "./get.route";

const app = express();

const allowedOrigins = ["https://capsuleverse-test.web.app"];

const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://capsuleverse-test.web.app"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.route("/api/capsule-list/v1").get(getCapsuleList);
app.route("/api/me/v1").get(getMe);
app.route("/api/relations/v1").get(getRelations);
app.route("/api/chats/v1/:chatId").get(getChats);
app.route("/api/users/v1").get(getUsers);
app.route("/api/live-chat/v1").get(getLiveChat);

const httpServer: any = app.listen(9000, () => {
  console.log(
    "HTTP REST API Server running at http://localhost:" +
      httpServer.address().port
  );
});
