import { API_OPTIONS } from "../utils/constants";

export const useFetchApi = async (url) => {
    const data = await fetch(url, API_OPTIONS);
    return response = await data?.json();
}
