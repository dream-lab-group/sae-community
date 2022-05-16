//
// Convert the JSON into the frontend
//

type SuccessfullConversion<T> = { errorType: 'none'; value: T };

type ConversionError = {
  errorType: 'conversion-error';
  errorMessage: string;
};

export type Conversion<T> = SuccessfullConversion<T> | ConversionError;
