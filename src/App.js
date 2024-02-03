import {React, lazy,Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Header  from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";


    const Grocery= lazy(()=> import("./Components/Grocery"));
    const About= lazy(()=> import("./Components/About"));
    const AppLayout = ()=> {
        return (
            <div className="app">
                <Header />
                <Outlet />
            </div>
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
            }],
            errorElement : <Error />
        },
    ])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
