import { AiFillStar } from "react-icons/ai";

const RestaurantCard = ({
  name,
  avgRating,
  image,
  costForTwo,
  cuisines,
  deliveryTime,
}) => {
  console.log("name", name);
  return (
    <>
      <div className="w-[268px] h-[312px] m-4 rounded-lg shadow-md items-center cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105">
        <img src={image} alt="" className="w-full rounded-t-lg" />
        <div className="my-2">
          <div className="px-2 text-base font-bold text-[#282c3f]">{name}</div>
          <div className="h-[48px] w-auto px-2 pt-1 text-sm text-[#686b78] break-words whitespace-normal line-clamp-2">
            {cuisines.join(", ")}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px",
            fontSize: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <AiFillStar
              fontSize="large"
              color={avgRating >= 4 ? "#48c479" : "#db7c38"}
            />
            <span style={{ fontWeight: 700 }}>{avgRating}</span>
          </div>
          <div>•</div>
          <div>{deliveryTime} MINS</div>
          <div>•</div>
          <div>{costForTwo}</div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
