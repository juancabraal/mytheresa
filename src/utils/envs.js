import { cleanEnv, str } from "envalid";

const getEnvVars = () => {
  const envVars = cleanEnv(process.env, {
    NODE_ENV: str(),
    API_URL: str(),
  });

  return envVars;
};

const envs = getEnvVars();

export default envs;
