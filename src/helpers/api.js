import axios from "axios";

let store;
export const HOST = "http://192.168.202.113:3100";
export const injectStore = (_store) => (store = _store);
export const instance = axios.create({
  baseURL: HOST,
});

export const authInstance = axios.create({
  baseURL: HOST,
});
