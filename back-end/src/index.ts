import express from "express"
import "dotenv/config"
import ConfigServer from "./config/configServer";
import Router from "./routers";
const app = express()

//config  
ConfigServer(app)

//router
Router(app)

app.listen(parseInt(process.env.PORT as string), process.env.HOST as string, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


