require("dotenv").config();
const express = require("express");
const app = express();

//config temple engine
require("./config/viewEngine.js")(app);

//router
app.use(require("./routers"));

//middleware

app.listen(process.env.PORT, process.env.HOST_NAME, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
