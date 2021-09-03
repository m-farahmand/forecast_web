

export const httpClient = (url, options: any = {}) => {
  //@TODO should be set from env file
  const basePath = 'http://localhost:2000'
  if (!options ?.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const accessToken = localStorage.getItem("accessToken");
  options.headers.set("Authorization", `Bearer ${accessToken}`);
  return fetch(`${basePath}/${url}`, options);
};