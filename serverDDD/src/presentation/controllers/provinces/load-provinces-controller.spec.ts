import { ok } from "../../helpers/http-helper";
import { LoadProvincesController } from "./load-provinces-controller";
import {
  LoadProvinces,
  ProvinceModel
} from "./load-provinces-controller-protocols";

function makeFakeProvinces(): ProvinceModel[] {
  return [
    {
      id: "1",
      name: "Quebec",
      capital: "Montreal",
      minimum_wage: 15,
    },
    {
      id: "2",
      name: "Ontario",
      capital: "Ottawa",
      minimum_wage: 20,
    },
  ];
}

type SutTypes = {
  sut: LoadProvincesController;
  loadProvincesStub: LoadProvinces;
};

const makeLoadProvinces = (): LoadProvinces => {
  class LoadProvincesStub implements LoadProvinces {
    async load(): Promise<ProvinceModel[]> {
      return new Promise((promise) => promise(makeFakeProvinces()));
    }
  }

  return new LoadProvincesStub();
};

const makeSut = (): SutTypes => {
  const loadProvincesStub = makeLoadProvinces();
  const sut = new LoadProvincesController(loadProvincesStub);

  return {
    loadProvincesStub,
    sut,
  };
};

describe("LoadProvincesController", () => {
  it("ensure load provinces is called", async () => {
    const { sut, loadProvincesStub } = makeSut();
    const loadSpy = jest.spyOn(loadProvincesStub, "load");
    await sut.handle({});
    expect(loadSpy).toHaveBeenCalled();
  });

  it("should return 200 on success", async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle({});
    expect(httpResponse.statusCode).toEqual(ok(makeFakeProvinces()).statusCode);
  });
});
