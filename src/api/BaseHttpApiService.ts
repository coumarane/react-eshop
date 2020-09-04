// BaseHttpApiService.ts

import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from "axios";
import { ToastifyErrorNetwork, ToastifyGenericError } from "../lib/toastify";

export enum EnumContentType {
  JSON = "application/json",

  XML = "application/xml",

  FORM = "application/x-www-form-urlencoded",
}

/**
* Class api base.
* Axios is used to call backend api
* The token is compulsory to access to backend epi, token is retieve using sg-connect widget
*/

class BaseHttpApiService {
  private _axiosInstance: AxiosInstance;

  private _baseURL: string;

  private _token: string | null;

  constructor(baseURL: string) {
    this._baseURL = baseURL;

    this._token = null;

    this._axiosInstance = axios.create();
  }

  private defaultOptions = (): any => {
    // Set the AUTH token for any request

    this._token = "xxxx";

    const options = {
      baseURL: this._baseURL,

      headers: {
        Accept: "application/json",

        // Authorization: `${this._token}`, // OAuth Authetification
      },
    };

    return options;
  };

  /**
   * Create instance
   */

  private createAxiosInstance() {
    this._axiosInstance = axios.create(this.defaultOptions());

    // Add a request interceptor

    this._axiosInstance.interceptors.request.use(
      (config) => config,

      (error) => {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor

    this._axiosInstance.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  protected getToken() {
    return this._token;
  }

  protected get(endpoint: string, conf = {}): AxiosPromise {
    this.createAxiosInstance();

    return new Promise((resolve, reject) => {
      this._axiosInstance

        .get(`${endpoint}`, conf)

        .then((response) => {
          resolve(response);
        })

        .catch((error) => {
          reject(error);
        });
    });
  }

  protected create(endpoint: string, data: {}, conf = {}): AxiosPromise {
    this.createAxiosInstance();

    return this.post(endpoint, data, conf);
  }

  protected post(endpoint: string, data: {}, conf = {}): AxiosPromise {
    this.createAxiosInstance();

    return new Promise((resolve, reject) => {
      this._axiosInstance

        .post(`${endpoint}`, data, conf)

        .then((response) => {
          resolve(response);
        })

        .catch((error) => {
          reject(error);
        });
    });
  }

  protected update(endpoint: string, data: {}, conf = {}): AxiosPromise {
    this.createAxiosInstance();

    return new Promise((resolve, reject) => {
      this._axiosInstance

        .put(`${endpoint}`, data, conf)

        .then((response) => {
          resolve(response);
        })

        .catch((error) => {
          reject(error);
        });
    });
  }

  protected delete(endpoint: string, id: any, conf = {}): AxiosPromise {
    this.createAxiosInstance();

    return new Promise((resolve, reject) => {
      this._axiosInstance

        .delete(`${endpoint}/${id}`, conf)

        .then((response) => {
          resolve(response);
        })

        .catch((error) => {
          reject(error);
        });
    });
  }

  protected put(endpoint: string, id: any, conf = {}): AxiosPromise {
    this.createAxiosInstance();

    return new Promise((resolve, reject) => {
      this._axiosInstance

        .put(`${endpoint}/${id}`, conf)

        .then((response) => {
          resolve(response);
        })

        .catch((error) => {
          reject(error);
        });
    });
  }

  protected deleteFile(endpoint: string, conf = {}): AxiosPromise {
    this.createAxiosInstance();

    return new Promise((resolve, reject) => {
      this._axiosInstance

        .delete(`${endpoint}`, conf)

        .then((response) => {
          resolve(response);
        })

        .catch((error) => {
          reject(error);
        });
    });
  }

  protected uploadFile(
    endpoint: string,
    data: FormData,
    conf = {}
  ): AxiosPromise {
    this.createAxiosInstance();

    return this.post(endpoint, data, conf);
  }

  protected downloadFile(endpoint: string): AxiosPromise {
    this.createAxiosInstance();

    const conf = {
      responseType: "blob", // important

      timeout: 30000,
    };

    return this.get(endpoint, conf);
  }

  handleSuccess(response: AxiosResponse) {
    return response;
  }

  handleError = (err: any) => {
    if (!err.response) {
      ToastifyErrorNetwork();
    } else {
      if (err.response !== undefined) {
        const { status } = err.response;

        switch (status) {
          case 401:
            if (err.response.data.trim() !== "") {
              ToastifyGenericError(err.response.data.Message);
            } else {
              const message = `err.message\n\n - "Your session has expired. Please refresh the page and try again."`;

              ToastifyGenericError(message);
            }

            break;

          case 404:
            ToastifyGenericError(
              "404 Server cannot find the requested resource"
            );

            break;

          case 405:
            ToastifyGenericError("405 Method Not Allowed");

            break;

          case 500:
            if (err.response.data) {
              ToastifyGenericError(err.response.data.Message);
            } else {
              ToastifyGenericError(err.response.statusText);
            }

            break;
        }
      }
    }

    return Promise.reject(err);
  };

  redirectTo = (document: any, path: string) => {
    document.location = path;
  };
}

export default BaseHttpApiService;
