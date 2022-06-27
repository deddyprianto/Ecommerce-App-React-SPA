import axios from "axios";
import useSWR from "swr";

export const useChat = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`http://localhost:3000/chat`, fetcher, {
    shouldRetryOnError: false,
  });
  return {
    chat: data,
    isLoading: !error && !data,
    isError: error,
  };
};
