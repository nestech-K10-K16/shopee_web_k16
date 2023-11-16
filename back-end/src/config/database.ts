import { createPool } from "mysql2/promise";

const Connection = createPool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

export default Connection

