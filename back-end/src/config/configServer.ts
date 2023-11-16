import { NextFunction, Request, Response, Express } from "express";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'

const ConfigServer = (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", "true")
    next();
  });

  // config body parser
  app.use(bodyParser.json({ limit: "100mb" }));
  app.use(bodyParser.urlencoded({ extended: false, limit: "100mb" }));

  // config cookie parser
  app.use(cookieParser())
};

export default ConfigServer;
