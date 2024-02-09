import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = ()=>{
    const[btnNameReact, setbtnNameReact] = useState("Login");
    console.log("Header rendered");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } =useContext(UserContext);
    console.log(loggedInUser
);

    // if no dependency array => useEffect is called on every render
    // if dependency array is empty => useEffect is called on initial render(just once)
    // if dependency array is [btnNameReact] => called every when btnNameReact is updated
    useEffect(()=>{
        console.log("useEffect called");
    },[btnNameReact]);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
            <img className="w-28" src={LOGO_URL}></img>
        </div>
            <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">OnlineStatus: {onlineStatus ? "✅" :"🛑"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4">Cart</li>
                <button className="login" onClick={()=>{ 
                    btnNameReact ==="Login" ? setbtnNameReact("Logout") :setbtnNameReact("Login"); 
            }}
            >
                {btnNameReact}</button>
                <li className="px-4">{loggedInUser}</li>
            </ul>
        </div>

        </div>
    )
}

export default Header;