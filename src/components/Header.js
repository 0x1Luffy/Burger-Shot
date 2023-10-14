import {useState} from "react";

import { Link } from "react-router-dom";
// const loggedInUser=()=>{
//    API call to check authentication
//     return true;
// }


const Title=()=>{
    return (
       <a className="logo-anchor" href="/">
           <img className="logo" src={require("../../assets/burger-shot-logo.png")} alt="Burger Logo" />
           
           </a>
    )
    }
    const Header=()=>{
        const[isLoggedIn,setIsLoggedIn]=useState(false);
        
        return(
            <div className="header">
                <Title/>
                
                <div className="nav-items">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>  
                        </li>
                        <li>
                            <Link to="/Cart">Cart</Link>  
                            </li>
                    </ul>
                </div>
                {
                     
                     isLoggedIn?<button onClick={()=>{setIsLoggedIn(false)}}>Logout</button>:<button onClick={()=>{setIsLoggedIn(true)}}>Login</button>
                
                //    Whenever a login button is there use use state
                }
                
            </div>
        )
        };

    export default Header;