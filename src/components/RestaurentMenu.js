import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../config";


const RestaurentMenu=()=>{
    const{resId}=useParams();
    
      

    const[restaurant,setRestaurant]=useState({});

    useEffect(()=>{
    getRestaurentInfo();
    },[]);
    async function getRestaurentInfo(){
        const data=await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0221278&lng=72.8729633&&submitAction=ENTER&restaurantId=61131"
        );
        const json=await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }
return(
    
<div>
    <h1>Restaurent id: {resId}</h1>
    <h2>{restaurant?.name}</h2>
    <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId}/>
    <h3>{restaurant?.area}</h3>
    <h3>{restaurant?.city}</h3>
    <h3>{restaurant?.avgRating}</h3>
    <h3>{restaurant?.costForTwoMsg}</h3>
</div>


);
}



export default RestaurentMenu;