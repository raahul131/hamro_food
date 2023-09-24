import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MenuShimmer from "../components/MenuShimmer";
import { IMG_CDN_URL } from "../utils/constants";



const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantinfo();
  }, []);

  const getRestaurantinfo = () => {
    axios
      .get(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8787333&lng=77.6297814&restaurantId=" +
          id
      )
      .then((res) => {
        //   let menu = res?.data?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        //   let food = menu.map(item => {
        //     return item.card.info.name;
        //   })
        //   console.log(food);

        setRestaurant(res?.data?.data?.cards[0]?.card?.card?.info);
        // console.log(res?.data?.data?.cards[0]?.card?.card?.info);
      })

      .catch((err) => {
        console.log("err", err);
      });
  };

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="h-screen flex-col flex items-center justify-center">
      <h1 className="text-xl font-extrabold p-5">{restaurant?.name}</h1>
      <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt=""  className="h-60 rounded-lg"/>
    </div>
  );
};

export default RestaurantMenu;
