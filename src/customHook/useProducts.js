import axios from "axios";
import useSWR from "swr";

export const useProducts = (endPoint) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`http://localhost:3000/${endPoint}`, fetcher, {
    shouldRetryOnError: false,
  });
  return {
    dataResponse: data,
    isLoading: !error && !data,
    isError: error,
  };
};
