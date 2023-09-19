import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { IMG_CDN_URL, RESTAURANT_LIST } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantList = (props) => {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  console.log("restaurants", restaurants);

  const fetchRestaurants = () => {
    setLoading(true);
    axios
      .get(RESTAURANT_LIST)
      .then((res) => {
        setLoading(false);

        setRestaurants(
          res?.data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  if (loading) {
    return <div><Shimmer/></div>;
  }

  return (
    <>
      <div>
        <div className="flex justify-center flex-wrap gap-5 items-center mx-10">
          {restaurants?.map((item, id) => (
            <RestaurantCard
              key={id}
              name={item.info.name}
              avgRating={item.info.avgRating}
              image={IMG_CDN_URL + item.info.cloudinaryImageId}
              costForTwo={item.info.costForTwo}
              cuisines={item.info.cuisines}
              deliveryTime={item.info.sla.deliveryTime}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantList;
