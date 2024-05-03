import React, { useState } from "react";
import { Menu, SearchIcon } from "lucide-react";
import SearchBar from "./search-bar";

const Navbar = ()=>{
  const [box , setBox] = useState(false)
   return(
    <>
     {!box && <div className="flex justify-between border solid h-20 text-justify">  
          
           <div><SearchIcon/></div>

           <div className="flex gap-5">
            <div className="hover:underline cursor pointer">Men</div>
            <div className="hover:underline cursor pointer">Women</div>
            </div>
           <div className="flex gap-4">
            <div onClick={() =>{
               setBox(true)
            }}><SearchIcon/></div>
            <div><SearchIcon/></div>
            <div><SearchIcon/></div>
           </div> 
     </div>}
           {box && <SearchBar/>}
    </>
     
   )
}

export default Navbar;