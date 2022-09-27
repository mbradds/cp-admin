import AuthLogo from "./extensions/info-box-icon_engagement.png";
// import MenuLogo from "./extensions/logo.png";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: AuthLogo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        alternative100: "#f6ecfc",
        alternative200: "#e0c1f4",
        alternative500: "#ac73e6",
        alternative600: "#9736e8",
        alternative700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
    // Extend the translations
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "CP Admin Dashboard",
        "Auth.form.welcome.title": "Welcome to CP Admin",
        "Auth.form.welcome.subtitle": "Admin portal for the Community Profiles web app.",
        "app.components.HomePage.welcomeBlock.content.again": "Please click on the Content Manager button in the upper left hand corner to edit the community data.",
      },
    },
  },

  bootstrap() {},
};
