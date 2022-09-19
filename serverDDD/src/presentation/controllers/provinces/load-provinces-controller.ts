import { ok } from "../../helpers/http-helper";
import { HttpRequest, HttpResponse } from "../../protocols";
import {
  Controller,
  LoadProvinces
} from "./load-provinces-controller-protocols";
export class LoadProvincesController implements Controller {
  constructor(private readonly loadProvinces: LoadProvinces) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const provinces = await this.loadProvinces.load();
    const data = ok(provinces);
    return data;
  }
}
