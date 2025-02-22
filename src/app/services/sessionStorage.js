class SessionStorageManager {
  static #instance;

  #name;

  constructor(name) {
    this.#name = name;
  }

  set(value) {
    if (value === undefined || value === null)
      throw new Error(`El valor a guardar no debe ser 'null' o 'undefined'`);
    sessionStorage.setItem(this.#name, value);
  }

  setAsObject(value) {
    if (typeof value !== 'object') throw new Error(`El valor a guardar debe ser de tipo 'Object'`);
    sessionStorage.setItem(this.#name, JSON.stringify(value));
  }

  get() {
    return sessionStorage.getItem(this.#name);
  }

  getAsObject() {
    const value = this.get();
    return JSON.parse(value);
  }

  delete() {
    sessionStorage.removeItem(this.#name);
  }
}

export default SessionStorageManager;