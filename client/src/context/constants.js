export const apiURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api/v1"
    : "deloyedUrl";

export const LOCAL_STORAGE_TOKEN = "localStorageToken";
