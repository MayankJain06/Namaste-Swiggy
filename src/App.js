import {React, lazy,Suspense, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header  from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";

    const Grocery= lazy(()=> import("./Components/Grocery"));
    const About= lazy(()=> import("./Components/About"));
    const AppLayout = ()=> {

        const [userName, setUserName] = useState();

        // authentication
        useEffect(()=>{
            const data ={
                name: "Mayank Nahata",
            };
            setUserName(data.name);
        },[]);

        return (
            <Provider store = {appStore}>
            <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
            </UserContext.Provider>
            </Provider>
        )
    }
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element : <AppLayout />,
            children:[{
                path: "/",
                element : <Body /> 
            },
            {
                path: "/about",
                element :  <Suspense fallback={"Loading..."}> <About /></Suspense>
            },
            {
                path: "/contact",
                element : <Contact />
            },
            {
                path: "/grocery",
                element : <Suspense fallback={"Loading..."}> <Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element : <RestaurantMenu />
            },
            {
                path: "/Cart",
                element : <Cart />
            },
        ],
            errorElement : <Error />
        },
    ])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
