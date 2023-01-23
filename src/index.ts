const cors = require("cors");
import express from "express";
import { getCapsuleFeed, getMe, getRelations, getUsers } from "./get.route";

const app = express();
app.use(cors());

app.route("/api/capsule-feed/v1").get(getCapsuleFeed);
app.route("/api/me/v1").get(getMe);
app.route("/api/relations/v1").get(getRelations);
app.route("/api/users/v1").get(getUsers);

const httpServer: any = app.listen(9000, () => {
  console.log(
    "HTTP REST API Server running at http://localhost:" +
      httpServer.address().port
  );
});
