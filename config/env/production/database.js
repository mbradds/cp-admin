module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("PROD_DATABASE_HOST", "localhost"),
      port: env.int("PROD_DATABASE_PORT", 5432),
      database: env("PROD_DATABASE_NAME"),
      user: env("PROD_DATABASE_USERNAME"),
      password: env("PROD_DATABASE_PASSWORD"),
      schema: env("PROD_DATABASE_SCHEMA", "public"),
      ssl: true,
    },
  },
});
