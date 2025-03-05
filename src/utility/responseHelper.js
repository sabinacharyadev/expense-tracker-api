export const buildSuccessResponse = (res, data, message) => {
  return res.json({
    status: "success",
    message,
    data,
  });
};

export const buildErrorResponse = (res, message) => {
  return res.json({
    status: "error",
    message,
  });
};
