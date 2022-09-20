const { exec } = require("child_process");
require("dotenv").config();

// save production database locally
exec(
  `pg_dump -Fc -v --host=${process.env["PROD_DATABASE_HOST"]} --username=${process.env["PROD_DATABASE_USERNAME"]} --dbname=${process.env["PROD_DATABASE_NAME"]} -f ./db_backup/${process.env["PROD_DATABASE_NAME"]}.dump`
);
