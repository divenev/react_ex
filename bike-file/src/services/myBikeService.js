import { requestServer } from "./requestServer";

export const myBikeService = async (ownerId) => {
  const bike = await requestServer(
    `/data/bikes?where=_ownerId IN ("${ownerId}")`,
    "GET"
  );
  return bike;
};
