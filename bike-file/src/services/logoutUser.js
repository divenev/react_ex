import { requestServer } from "./requestServer";

export const logoutUser = async () => {
  const result = await requestServer(`/users/logout`, "POST");
  return result;
};
