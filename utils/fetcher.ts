import axios from "axios";

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
    .then((response) => response.data);

export default fetcher;
