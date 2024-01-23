import React from "react";
import ReactDOM  from "react-dom/client";

// React.createElement ==> Object ==> HTML(render)
// JSX ==> ( Transpiled before it reaches the JS Engine) --> Parcel --> Babel
// JSX ==> Transpiles into React.createElement ==> React.createElement ==> Object ==> HTML(render)


    /**
    * Header
        - Logo 
        - Nav Items
    * Body
        - Search 
        - RestaurantContainer
         - Restaurant Card 
         - Img
         - Name of the Res, Star Rating, cuisine, Delivery Time


    * Footer
        - Copyright
        - Links
        - Address
        - Contact 
    **/

    const Header = ()=>{
        return (
            <div className="header">
                <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
            </div>
                <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

            </div>
        )
    }
    

    const RestaurantCard = ()=>{
        return (
            <div className="res-card" style={{
                backgroundColor: "#f0f0f0"
            }
        }>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/7c9de8b726d4500b7f311461f1721310"></img>
                <h3>Santosh Dhaba</h3>
                <h4>Biryani, North Indian, Asian</h4>
                <h4>4.4 stars</h4>
                <h4>38 minutes</h4>
            </div>
        )
    }
    const Body = () => {
        return (
            <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                </div>
            </div>
        )
    }
    const AppLayout = ()=> {
        return (
            <div className="app">
                <Header />
                <Body />
            </div>
        )
    }

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
