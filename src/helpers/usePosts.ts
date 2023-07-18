import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const usePosts = () => {
  const { data, isLoading, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    posts: data,
    isLoading,
    isError: error,
  };
};
