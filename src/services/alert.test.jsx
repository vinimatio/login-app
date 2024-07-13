import { Alert } from "./alert";

describe("Alert", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  it("Deve receber um argumento e emitir uma notificação alert com esse argumento", () => {
    const value = Alert("nomeusuario");
    expect(mockAlert).toHaveBeenCalled(value);
  });
});
