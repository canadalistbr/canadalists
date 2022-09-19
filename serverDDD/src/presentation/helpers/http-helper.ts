import { ServerError } from "../errors/server-errors";
import { HttpResponse } from "../protocols";

export function ok(data: any): HttpResponse {
  return {
    statusCode: 200,
    body: data,
  };
}

export function serverError(error: Error): HttpResponse {
  return {
    statusCode: 500,
    body: new ServerError(error.stack),
  };
}
