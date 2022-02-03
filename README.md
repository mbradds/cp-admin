# cp-admin

Admin portal for the [community-profiles](https://github.com/mbradds/community-profiles) web app. Created with Strapi and postgresql backend. Hosted with Azure App Services.

## Strapi Instructions

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
```

Starts the application with a local postgresql database connection. API can be accessed by the frontend via: http://localhost:1337/api/communities

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

Start the app with local database connection:

```
npm run start
```

API: http://localhost:1337/api/communities

Start the app with Azure database connection:

```
NODE_ENV=production npm run start
```

API: https://cp-admin.azurewebsites.net/api/communities

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
```

The Azure production database can be cloned and saved for local development

```
npm run save-azure-db
```
