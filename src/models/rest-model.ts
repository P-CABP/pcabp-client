export enum RestResponseType {
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}

export interface RestResponse<T> {
  type: RestResponseType;
  data: T;
}
