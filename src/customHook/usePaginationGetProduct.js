import useSWRInfinite from "swr/infinite";
import axios from "axios";

export const usePaginationGetProduct = (url = "https://reqres.in/api") => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, size, setSize } = useSWRInfinite(
    (pageIndex, previousPageData) => {
      pageIndex = pageIndex + 1;
      if (previousPageData && !previousPageData.data.length) return null;
      return `${url}/users?page=${pageIndex}`;
    },
    fetcher
  );
  if (!data) return "loading";
  let totalUsers = 0;
  for (let i = 0; i < data.length; i++) {
    totalUsers += data[i].data.length;
  }
  const loadMore = data && typeof data[size - 1] === "undefined";
  return {
    data: data,
    size: size,
    setSize: setSize,
    totalUsers: totalUsers,
    loadMore: loadMore,
  };
};
