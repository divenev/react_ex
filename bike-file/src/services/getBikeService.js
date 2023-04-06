import { requestServer } from "./requestServer";

export const GetBikeService = async (IdBike) => {
  const result = await requestServer(`/data/bikes/${IdBike}`, "GET");
  return result;
};
