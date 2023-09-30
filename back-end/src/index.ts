import express from "express"
import Config from "./config/common";
import router from "./routers";
const app = express()

//config  
Config(app)

//router
app.use("/", router)

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
