module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4f2ecf246cf9a35f33ad7d5860f10c4d'),
  },
});
