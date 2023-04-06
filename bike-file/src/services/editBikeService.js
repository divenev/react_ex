import { requestServer } from "./requestServer";

export const EditBikeService = async (e, IdBike) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));

  if (
    data.brand === "" ||
    data.category === "" ||
    data.frameNumber === "" ||
    data.status === ""
  ) {
    alert("Enter a value in all fields");
    throw new Error("Enter a value in all fields");
  }

  const result = await requestServer(`/data/bikes/${IdBike}`, "PUT", data);

  return result;
};
