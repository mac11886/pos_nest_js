export const ENV = () => {
  return {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_TIMEZONE: process.env.DB_TIMEZONE,
    URL_API: process.env.URL_API,
  };
};
