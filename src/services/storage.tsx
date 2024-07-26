interface ISessionBank {
  login: boolean;
}

const sessionBank = {
  login: false,
};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("sessionBank");
};

export const createLocalStorage = (): void => {
  localStorage.setItem("sessionBank", JSON.stringify(sessionBank));
};

export const changeLocalStorage = (sessionBank: ISessionBank): void => {
  localStorage.setItem("sessionBank", JSON.stringify(sessionBank));
};
