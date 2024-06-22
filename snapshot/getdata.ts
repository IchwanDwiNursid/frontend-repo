import Cookies from "js-cookie";

export const getDataApi = async () => {
  const data = Cookies.get("refresh_token");
  console.log(data);
};
