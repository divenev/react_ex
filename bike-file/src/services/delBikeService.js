import { requestServer } from "./requestServer";

export const delBikeService = async (IdBike) => {
  const result = await requestServer(`/data/bikes/${IdBike}`, "DELETE");
  return result;
};
