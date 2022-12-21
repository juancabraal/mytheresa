export const getApplicationRoute = (path = "") => {
  const APP_URL = process.env.APP_URL;
  return [APP_URL, path].join("").replace(/(?<!:)\/+/gm, "/");
};
