import { requestServer } from "./requestServer";

export const LogoutUser = async () => {
  const result = await requestServer(`/users/logout`, "POST");
  return result;
};
