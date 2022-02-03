const { exec } = require("child_process");
require("dotenv").config();

// save production database locally
exec(
  `pg_dump -Fc -v --host=${process.env["PROD_DATABASE_HOST"]} --username=${process.env["PROD_DATABASE_USERNAME"]} --dbname=${process.env["PROD_DATABASE_NAME"]} -f ./db_backup/${process.env["PROD_DATABASE_NAME"]}.dump`
);

// restore production database locally
exec(
  `pg_restore -v --no-owner --host=localhost --port=5432 --username=${process.env["PROD_DATABASE_USERNAME"]} --dbname=${process.env["PROD_DATABASE_NAME"]} ./db_backup/${process.env["PROD_DATABASE_NAME"]}.dump`
);
