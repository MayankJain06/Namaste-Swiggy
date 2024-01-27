import RestaurantCard from "./RestaurantCard"
import { useState } from "react";
import restaurantList from "../utils/mockData";

const Body = () => {

    // Local State variable -Super Powerful variable
    const [listOfRestaurants, setlistofRestaurants] = useState(restaurantList);

    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                   // Filtering Logic
                   const filteredRestaurants = listOfRestaurants.filter(res=>res.data.avgRating>=4);
                   setlistofRestaurants(filteredRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {listOfRestaurants.map((restaurant)=> 
              <RestaurantCard key={restaurant.data.id}  resData ={restaurant} />
              )}
            </div>
        </div>
    )
}

export default Body;