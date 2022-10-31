import axios from "axios";

const fetcher_noneHeaders = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) => response.data);

export default fetcher_noneHeaders;
