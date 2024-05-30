import { createPool } from "mysql2/promise";

import { DB_NAME, DB_HOST, DB_PASSWORD, DB_USER } from "../config/config.js";

let poolConfig = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
};

export const pool = createPool(poolConfig);