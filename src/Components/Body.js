import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import restaurantList from "../utils/mockData";

const Body = () => {

    // Local State variable -Super Powerful variable
    const [listOfRestaurants, setlistofRestaurants] = useState([]);

        useEffect(()=>{
            fetchData();

        }, []);

      const fetchData= async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4853202&lng=78.4453532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata = await data.json();
        console.log(jsondata);
        setlistofRestaurants(jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      };

      if(listOfRestaurants.length===0){
        return <div>Loading...</div>
      }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                   // Filtering Logic
                   const filteredRestaurants = listOfRestaurants.filter(res=>res.info.avgRating>=4);
                   setlistofRestaurants(filteredRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {listOfRestaurants.map((restaurant)=> 
              <RestaurantCard key={restaurant.info.id}  resData ={restaurant} />
              )}
            </div>
        </div>
    )
}

export default Body;