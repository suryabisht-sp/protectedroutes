    import { AUTH_TOKEN } from "./constant";
    
    export const getToken = () => {
      return JSON.parse(localStorage.getItem(AUTH_TOKEN));
    };
    
    export const setToken = (token) => {
      if (token) {
        localStorage.setItem(AUTH_TOKEN, JSON.stringify(token));
      }
    };
    
    export const removeToken = () => {
      localStorage.removeItem(AUTH_TOKEN);
    };
