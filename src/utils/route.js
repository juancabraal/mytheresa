export const getApplicationRoute = (path = "") => {
  const APP_URL = process.env.APP_URL;
  const urlPath = [APP_URL, path].join("");

  if (urlPath.slice(0, 2) === "//") return urlPath.slice(1);

  return urlPath;
};
