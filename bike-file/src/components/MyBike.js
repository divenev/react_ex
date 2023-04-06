import { useContext, useEffect, useState } from "react";
import { myBikeService } from "../services/myBikeService";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import { BikeContext } from "../contexts/BikeContext";

export const MyBike = () => {
  const [bikes, setBike] = useState();
  const { user } = useContext(UserContext);
  const { updateBike } = useContext(BikeContext);

  useEffect(() => {
    myBikeService(user && user._id).then((result) => {
      setBike(result);
      updateBike(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="catalog">
        <h3>My Bike</h3>

        {bikes &&
          bikes.length >= 1 &&
          bikes.map((b) => (
            <div key={b._id} className="myBike">
              <p>
                Status: <b>{b.status}</b>
              </p>
              <p>Brand: <b>{b.brand}</b></p>
              <p>Category: <b>{b.category}</b></p>
              {/* <p>Description: {b.description}</p> */}
              <p>FrameNumber: </p>
              <p><b>{b.frameNumber}</b></p>
              <img className="image" src={b.imageUrl} alt="No img" />
              <Link to={`/bike/edit/${b._id}`} className="button">
                Edit
              </Link>
              <Link to={`/bike/delete/${b._id}`} className="button button_del">
                Delete
              </Link>
            </div>
          ))}
        {bikes && bikes.length < 1 && <h3 className="no-bike">No bike yet</h3>}
      </section>
    </>
  );
};
