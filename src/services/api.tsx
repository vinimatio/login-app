import { IAccount } from "./types";

const account: IAccount = {
  id: "1",
  email: "test@test.com",
  pass: "12345",
  name: "Testador da Silva",
  balance: 2250.0,
};

export const api = new Promise<IAccount>((resolve) => {
  setTimeout(() => {
    resolve(account);
  }, 3000);
});
