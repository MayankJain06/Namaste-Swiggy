import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props)=>{
    const { resData }= props;
    const {loggedInUser} =useContext(UserContext);
    const {
      name,
      cuisines,
      cloudinaryImageId,
      costForTwo,
      sla,
      avgRating
    } =resData?.info;
    return (
        <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200">
        <img className="rounded-lg" alt="res-logo"
    src={
      CDN_URL +
      cloudinaryImageId
    } 
  />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
            <h4>{loggedInUser}</h4>
        </div>
    );
};


// Higher Order Component

// input =>RestaurantCard=> Restaurant Card promoted

export const withPromotedLabel =(RestaurantCard) => {
      return (props)=>{
        return (
          <div>
            <label>Promoted</label>
            <RestaurantCard {...props}/>
          </div>
        )
      }
}
export default RestaurantCard;