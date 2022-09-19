import { HttpRequest, HttpResponse } from "../../protocols";
import {
    Controller,
    LoadProvinces
} from "./load-provinces-controller-protocols";

export class LoadProvincesController implements Controller {
  constructor(private readonly loadProvinces: LoadProvinces) {}
  handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    this.loadProvinces.load();
    return null;
  }
}
