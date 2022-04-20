import queryString from "query-string";

export const extractQueryParam = (key) => {
  let params = queryString.parse(window.location.href);

  for (let param of Object.keys(params)) {
    if (param.includes(key)) {
      return params[param];
    }
  }

  return "";
};
