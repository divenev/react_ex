import { useContext, useEffect, useState } from "react";
import { myBikeService } from "../services/myBikeService";
import { UserContext } from "../contexts/UserContext";

export const MyBike = () => {
  const [bike, setBike] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    myBikeService(user._id).then((result) => {
      setBike(result);
    });
  }, [user]);

  return (
    <>
      <section className="catalog">
        <h3>My Bike</h3>

        {bike.length >= 1 &&
          bike.map((b) => (
            <div key={b._id} className="myBike">
              <p>
                <b>Status: {b.status}</b>
              </p>
              <p>Brand: {b.brand}</p>
              <p>Category: {b.category}</p>
              <p>Description: {b.description}</p>
              <p>FrameNumber: {b.frameNumber}</p>
              <img className="image" src={b.imageUrl} alt="No img" />
            </div>
          ))}

        {bike.length < 1 && <h3 className="no-bike">No bike yet</h3>}
      </section>
    </>
  );
};
