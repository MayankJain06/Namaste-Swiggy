import RestaurantCard from "./RestaurantCard"
import { useState } from "react";
import restaurantList from "../utils/mockData";

const Body = () => {

    // Local State variable -Super Powerful variable
    const [listOfRestaurants, setlistofRestaurants] = useState(restaurantList);

    // Normal JS variable
    // let listOfRestaurants =[];
//     let listOfRestaurants =[
// //         {
// //             data: {
// //               id: "74453",
// //               name: "Domino's Pizza",
// //               cloudinaryImageId: "bz9zkh2aqywjhpankb07",
// //               cuisines: ["Pizzas"],
// //               costForTwoString: "₹400 FOR TWO",
// //               deliveryTime: 45,
// //               avgRating: "4.1",
// //             },
// //     },
// //     {
// //         data: {
// //           id: "74456",
// //           name: "KFC",
// //           cloudinaryImageId: "bz9zkh2aqywjhpankb07",
// //           cuisines: ["Pizzas"],
// //           costForTwoString: "₹400 FOR TWO",
// //           deliveryTime: 45,
// //           avgRating: "3.8",
// //         },
// // },
// // {
// //     data: {
// //       id: "74455",
// //       name: "MCD",
// //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
// //       cuisines: ["Pizzas"],
// //       costForTwoString: "₹400 FOR TWO",
// //       deliveryTime: 45,
// //       avgRating: "4.5",
// //     },
// // },
// ]
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