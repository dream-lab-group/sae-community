import { RequestError } from './errors';

type FetchInitial = {
  status: 'initial';
};

type FetchLoading = {
  status: 'loading';
};

type FetchSuccess<T> = {
  status: 'success';
  value: T;
  localValue: T;
};

type FetchError<E> = {
  status: 'error';
  errorValue: E;
};

type FetchResult<T, Err> = FetchLoading | FetchSuccess<T> | FetchError<Err>;

export type RequestResult<T> = FetchInitial | FetchResult<Text, RequestError>;
