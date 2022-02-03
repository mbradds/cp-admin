module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  production: true,
  proxy: {
    enabled: false,
  },
  cron: {
    enabled: false,
  },
  admin: {
    autoOpen: false,
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
});
