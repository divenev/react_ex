import { requestServer } from "./requestServer";

export const DelBikeService = async (IdBike) => {
  const result = await requestServer(`/data/bikes/${IdBike}`, "DELETE");
  console.log(result);
  return result;
};
