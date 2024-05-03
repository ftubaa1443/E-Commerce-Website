import { SearchCheckIcon, SearchCodeIcon } from "lucide-react"
import { useState } from "react"

const SearchBar = () =>{
    const [val , setVal] = useState("")
     return(  
        <div>
        <div className="flex bg-gray-400 mx-[70px] w-[1300px] h-[60px] border rounded-lg ">
           <div className="m-5"><SearchCheckIcon/></div>
           <div className="m-5"><input  placeholder="seacrh" className="w-[1000px]"></input></div>
        </div></div>
     )
}
export default SearchBar