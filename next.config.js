require("dotenv").config();

module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
};
