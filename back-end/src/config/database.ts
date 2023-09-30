import { createPool } from "mysql2/promise";

const Connection = createPool({
  host: "localhost",
  port: 3306,
  database: "shoppe",
  user: "root",
  password: "123456",
});

export default Connection
