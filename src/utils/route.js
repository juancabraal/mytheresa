export const getApplicationRoute = (path = "") => {
  const APP_URL = process.env.APP_URL;
  const urlPath = [APP_URL, path].join("");

  return urlPath.replace("//", "/");
};
