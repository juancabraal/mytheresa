export const getErrorMessage = (error, customMessage) => {
  const defaultMsg =
    customMessage || "Error desconhecido. Tente novamente depois.";

  const errorMsg =
    error &&
    error.response &&
    error.response.data &&
    error.response.data.messages;

  return Array.isArray(errorMsg)
    ? Array.from(errorMsg).join("<br />")
    : typeof errorMsg === "string"
    ? errorMsg
    : defaultMsg;
};
