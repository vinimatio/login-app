import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";

const sessionBank = {
  login: false,
};

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");

  it("Deve retornar o objeto no localStorage. com a chave sessionBank", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("sessionBank");
  });
  it("Deve criar o objeto localstorage", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "sessionBank",
      JSON.stringify(sessionBank)
    );
  });

  it("Deve alterar o valor do objeto no localStorage", () => {
    changeLocalStorage(sessionBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "sessionBank",
      JSON.stringify(sessionBank)
    );
  });
});
