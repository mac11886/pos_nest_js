export const returnResponse = (
  result: boolean,
  status: number,
  message: string,
  data?: any,
  error?: any,
) => {
  return {
    result,
    status,
    message,
    ...(data && { data: data }),
    ...(error && { error: error }),
  };
};
