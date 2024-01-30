import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = ()=>{
    const[btnNameReact, setbtnNameReact] = useState("Login");
    console.log("Header rendered");

    // if no dependency array => useEffect is called on every render
    // if dependency array is empty => useEffect is called on initial render(just once)
    // if dependency array is [btnNameReact] => called every when btnNameReact is updated
    useEffect(()=>{
        console.log("useEffect called");
    },[btnNameReact]);
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
            <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <button className="login" onClick={()=>{ 
                    btnNameReact ==="Login" ? setbtnNameReact("Logout") :setbtnNameReact("Login"); 
                
            }}
            >
                {btnNameReact}</button>
            </ul>
        </div>

        </div>
    )
}

export default Header;