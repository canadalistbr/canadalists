import { HttpResponse } from "../protocols";

export function ok(data: any): HttpResponse {
  return {
    statusCode: 200,
    body: data,
  };
}
