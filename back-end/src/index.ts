import express from "express"
import ConfigServer from "./config/configServer";
import Router from "./routers";
const app = express()

//config  
ConfigServer(app)

//router
Router(app)

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
