import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu";
 

    const AppLayout=()=>{
        return(
            <>
            <Header/>
            <Outlet/>
            <Footer/>
            </>
        );
    };

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<AppLayout/>,
            errorElement:<Error/>,
            children: [
                {
                    path : "/",
                    element : <Body/>
                },
                {
                    path : "/About",
                    element : <About/>
                },
                {
                    path : "/Contact",
                    element : <Contact/>
                },
                {
                    path : "/Cart",
                    element : <Cart/>
                },
                {
                    path: "/restaurant/:resId",
                    element : <RestaurentMenu/>
                }
            ]
        },
        

    ])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

