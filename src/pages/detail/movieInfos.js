import { useMemo } from "react";
import useSWR from "swr";
import { axiosFetcher } from "../../api/fetchers";

const MovieInfos = ({ endpoint, children, defaultReturn = {} }) => {
  const { data: response } = useSWR(endpoint, axiosFetcher);

  const movieInfo = useMemo(() => {
    return response?.data || defaultReturn;
  }, [response]);

  return children(movieInfo);
};

export default MovieInfos;
