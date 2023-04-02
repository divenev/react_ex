import { requestServer } from "./requestServer";

export const checkBike = async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const bike = await requestServer(
    `/data/bikes?where=frameNumber IN ("${data.frame_number}")`,
    "GET"
  );
  return bike;
};
