const throwError = (status, message) => {
  const error = new Error(message);
  // error.message = message; 인데 이거를 한
  error.status = status;
  throw error;
};

module.exports = {
  throwError,
};
