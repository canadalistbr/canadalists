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

describe("LoadProvincesController", () => {
  it("ensure load provinces is called", () => {
    class LoadProvincesStub implements LoadProvinces {
      async load(): Promise<ProvinceModel[]> {
        return new Promise((promise) => promise(makeFakeProvinces()));
      }
    }
    const loadProvincesStub = new LoadProvincesStub();
    const loadSpy = jest.spyOn(loadProvincesStub, "load");
    const loadProvinces = new LoadProvincesController(loadProvincesStub);
    const sut = loadProvinces.handle({});
    expect(loadSpy).toHaveBeenCalled();
  });
});
