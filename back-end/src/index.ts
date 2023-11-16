import express from "express"
import "dotenv/config"
import ConfigServer from "./config/configServer";
import Router from "./routers";
const app = express()

//config  
ConfigServer(app)

//router
Router(app)

app.use((req, res) => {
  res.send({ message: "404 not found" })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


