import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";

import { BikeContext } from "../contexts/BikeContext";
import { useContext, useEffect, useState } from "react";
import { editBikeService } from "../services/editBikeService";
import { getBikeService } from "../services/getBikeService";

export const EditBike = () => {
  const { IdBike } = useParams();
  const { bikeL } = useContext(BikeContext);
  const [bike, setBikeS] = useState(
    bikeL && bikeL.filter((b) => b._id === IdBike)[0]
  );

  const { values, changeHandler, changeValue } = useForm({
    _id: bike._id,
    _ownerId: bike._ownerId,
    brand: bike && bike.brand,
    category: bike && bike.category,
    frameNumber: bike && bike.frameNumber,
    imageUrl: bike && bike.imageUrl,
    description: bike && bike.description,
    status: bike && bike.status,
  });

  useEffect(() => {
    if (!bike) {
      getBikeService(IdBike).then((b) => {
        setBikeS(b);
        changeValue(b);
      });
    }
  }, [IdBike, bike, changeValue]);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    await editBikeService(e, IdBike);
    navigate("/bike/my");
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="brand"
          value={values.brand}
          onChange={changeHandler}
          placeholder="Brand"
        ></input>
        <input
          type="text"
          name="category"
          value={values.category}
          onChange={changeHandler}
          placeholder="Category"
        ></input>
        <input
          type="text"
          name="frameNumber"
          value={values.frameNumber}
          onChange={changeHandler}
          placeholder="Frame Number"
        ></input>
        <select name="status" defaultValue={bike.status}>
          <option value="for sale">For sale</option>
          <option value="stolen">Stolen</option>
        </select>
        <input
          type="url"
          name="imageUrl"
          value={values.imageUrl}
          onChange={changeHandler}
          placeholder="Url image"
        ></input>
        <input
          type="text"
          name="description"
          value={values.description}
          onChange={changeHandler}
          placeholder="Description"
        ></input>
        <input type="submit" className="button" value="Edit bike"></input>
      </form>
    </>
  );
};
