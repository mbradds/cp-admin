const { exec } = require("child_process");
require("dotenv").config();

// restore production database locally
exec(
  `pg_restore -v --no-owner --host=localhost --port=5432 --username=${process.env["PROD_DATABASE_USERNAME"]} --dbname=${process.env["PROD_DATABASE_NAME"]} ./db_backup/${process.env["PROD_DATABASE_NAME"]}.dump`
);