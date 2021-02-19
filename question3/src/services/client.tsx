import { create } from "apisauce";

export const URL = "https://openlibrary.org";

const apiClient = create({
  baseURL: URL,
});

export default apiClient;
