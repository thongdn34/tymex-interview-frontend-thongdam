import { ApiClientResponse, APIError } from './types';

export interface ApiClientErrorType extends Error {
  cause?: Error;
}

type ApiClientErrorOptions<ErrorResponse> = {
  message: string;
  response?: ApiClientResponse<ErrorResponse>;
  originalError?: Error | ApiClientErrorType;
};

export class ApiClientError extends Error implements ApiClientErrorType {
  name = 'ApiClientError';

  readonly response?: ApiClientResponse<APIError>;

  readonly code?: string;

  readonly method?: string;

  readonly endpoint: string;

  readonly cause?: Error;

  constructor(
    {
      message,
      response: _response,
      originalError,
    }: ApiClientErrorOptions<APIError>,
    method: string,
    endpoint: string
  ) {
    const originalMessage = originalError?.message;
    const httpStatus = _response?.status ? `HTTP ${_response.status}` : '';
    const code = _response?.data?.code;
    const formattedMessage = [
      code || httpStatus ? `[${code || httpStatus}]:` : undefined,
      _response?.data?.message || originalMessage || message || 'unknown error',
      '-',
      `${method} ${endpoint}`,
    ]
      .filter(Boolean)
      .join(' ');

    super(formattedMessage);
    this.response = _response;
    this.code = code;
    this.method = method;
    this.endpoint = endpoint;

    if (originalError) {
      this.cause = originalError;
      this.stack = originalError.stack;
    }
  }
}

export class MissingParamsError extends Error {
  name = 'MissingParamsError';

  constructor({ message, originalError }: ApiClientErrorOptions<unknown>) {
    super(message);

    if (originalError) {
      this.cause = originalError;
      this.stack = originalError.stack;
    }
  }
}
