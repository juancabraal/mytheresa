import { cleanEnv, str } from "envalid";

const getEnvVars = () => {
  const envVars = cleanEnv(process.env, {
    NODE_ENV: str({ default: "development" }),
    APP_URL: str({ default: "/" }),
    API_TOKEN: str(),
  });

  return envVars;
};

const envs = getEnvVars();

export default envs;
