import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { IMG_CDN_URL, RESTAURANT_LIST } from "../utils/constants";
import Shimmer from "./Shimmer";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const RestaurantList = (props) => {
  const [loading, setLoading] = useState(true);
  const [allRestaurants, setAllRestarants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // console.log("restaurants", restaurants);

  function filterData(searchInput) {
    console.log(filteredRestaurants, "rest");
    let filteredData = filteredRestaurants.filter((restaurant) =>
      restaurant?.info?.name
        ?.toLowerCase()
        ?.includes(searchInput?.toLowerCase())
    );
    // console.log("after search::", filteredData);
    setFilteredRestaurants(filteredData);
    setSearchInput("");
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = () => {
    setLoading(true);
    axios
      .get(RESTAURANT_LIST)
      .then((res) => {
        setLoading(false);

        setFilteredRestaurants(
          res?.data?.data?.success?.cards[1]?.gridWidget?.gridElements
            ?.infoWithStyle?.restaurants
        );

        // console.log(
        //   res?.data?.data?.success?.cards[1]?.gridWidget?.gridElements
        //     ?.infoWithStyle?.restaurants
        // );
        setAllRestarants(
          res?.data?.data?.success?.cards[1]?.gridWidget?.gridElements
            ?.infoWithStyle?.restaurants
        );
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  };

  if (loading) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  if (filteredRestaurants?.length === 0) {
    return (
      <h1 className="h- screen items-center justify-center flex font-bold text-2xl mx-10 text-center">
        No Restaurants match you filter!!!!
      </h1>
    );
  }

  return allRestaurants === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div className="flex items-center justify-between my-7 mx-8 md:mx-48 rounded-lg p-2 space-x-2">
          <input
            type="text"
            placeholder="Search foods and restaurants..."
            className="w-full outline-none border-2 p-2 rounded-lg"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />

          {/* <span className="text-2xl text-zinc-400">
            <AiOutlineSearch />
          </span> */}

          <button
            className="p-2 pb-2 bg-orange-500 font-bold text-white hover:text-orange-500 hover:bg-white rounded-lg transition-all duration-300"
            onClick={() => {
              filterData(searchInput);
            }}
          >
            Search
          </button>
        </div>

        <div className="flex justify-center flex-wrap gap-5 items-center mx-10">
          {filteredRestaurants?.map((item, id) => (
            <Link to={"/restaurant/" + item.info.id} key={id}>
              <RestaurantCard
                name={item.info.name}
                avgRating={item.info.avgRating}
                image={IMG_CDN_URL + item.info.cloudinaryImageId}
                costForTwo={item.info.costForTwo}
                cuisines={item.info.cuisines}
                deliveryTime={item.info.sla.deliveryTime}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantList;
