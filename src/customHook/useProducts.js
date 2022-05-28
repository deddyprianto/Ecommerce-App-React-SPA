import axios from "axios";
import useSWR from "swr";

export const useProducts = (endPoint) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/${endPoint}`,
    fetcher,
    {
      shouldRetryOnError: false,
    }
  );
  return {
    dataResponse: data,
    isLoading: !error && !data,
    isError: error,
  };
};
