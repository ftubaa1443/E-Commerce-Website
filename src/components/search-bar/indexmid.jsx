import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Part = (props)=>{

    const [click , setClick] = useState(false)

    const navigate = useNavigate();

    const handleClick = ()=>{
        console.log("houehuihdgiuv");
        navigate(props.navigation);
    }


    return (
        <div>
        <div className="border w-[300px] h-[700px]">
            <div ><img src={props.image} className="w-[300px] h-[500px]"/></div>
            <div className=""><div className="font-extrabold">{props.title }</div><div className="font-bold text-cyan-300 font-serif">Hi SHOES COLLECTION Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more. </div></div>     
            <div className=""><button
             className="bg-black text-sm rounded-lg text-white m-12 " 
             onClick={handleClick}
            > 
             SHOP {props.name}
            </button></div>
           
        </div>
        </div>
    )}

export default Part;