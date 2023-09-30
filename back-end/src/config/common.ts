import { NextFunction, Request, Response, Express } from "express";
import bodyParser from 'body-parser';

const Config = (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type"
    );
    next();
  });

  //config body parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};

export default Config;
