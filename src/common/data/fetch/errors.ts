type GeneralError = {
  errorType: 'general-error';
  url: string;
  method: string;
};

export type RequestError = GeneralError;
