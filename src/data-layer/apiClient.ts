import { ApiClientError, MissingParamsError } from '@/core/errors';
import { axiosToApiClientResponse } from '@/core/transformers';
import { ApiClientMethods, ApiClientResponse } from '@/core/types';
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CustomParamsSerializer,
} from 'axios';
import { stringify } from 'qs';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

const EMPTY_STRING_URL_REGEX = new RegExp(/(^|[^:])\/\//g);

const validateUrl = (url: string) => {
  const isInvalid =
    EMPTY_STRING_URL_REGEX.test(url) ||
    url.includes('undefined') ||
    url.includes('null');

  if (isInvalid) {
    throw new MissingParamsError({
      message: `URL contains null-ish values: ${url}`,
    });
  }
};

export const withErrorHandling = async (
  method: string,
  endpoint: string,
  fn: () => Promise<ApiClientResponse>
) => {
  try {
    validateUrl(endpoint);

    return await fn();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // some endpoints return an error wrapped in a data object. This normalizes the error
      const errorResponse =
        error.response && axiosToApiClientResponse(error.response);
      if (errorResponse?.data?.data) {
        errorResponse.data = errorResponse.data.data;
      }
      const errorParams = {
        message: error.message,
        response: errorResponse,
        originalError: error,
      };
      let wrappedError = new ApiClientError(errorParams, method, endpoint);

      throw wrappedError;
    }

    throw error;
  }
};

const paramsSerializer: CustomParamsSerializer = (params) =>
  stringify(params, { allowDots: true, arrayFormat: 'repeat' });

const apiClientMethodsFactory = (
  axiosInstance: AxiosInstance,
  defaultRequestOptions: AxiosRequestConfig = {}
): ApiClientMethods => ({
  async get(url, options = {}) {
    const { headers, params, ...additionalOptions } = options;

    return withErrorHandling('GET', url, async () => {
      const response = await axiosInstance.get(url, {
        headers,
        params,
        paramsSerializer,
        ...defaultRequestOptions,
        ...additionalOptions,
      });

      return axiosToApiClientResponse(response);
    });
  },
});

export const apiClient = {
  v1: apiClientMethodsFactory(axiosInstance),
};
