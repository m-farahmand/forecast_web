

export const httpClient = (url, options: any = {}) => {
  //@TODO should be set from env file
  const basePath = 'http://localhost:2000/api'
  if (!options ?.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  return fetch(`${basePath}/${url}`, options);
};