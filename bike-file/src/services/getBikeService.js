import { requestServer } from "./requestServer";

export const getBikeService = async (IdBike) => {
  const result = await requestServer(`/data/bikes/${IdBike}`, "GET");
  return result;
};
