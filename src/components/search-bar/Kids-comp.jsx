import { useNavigate } from "react-router-dom";
import RatingStars from "./Rating";

const Kidscomp = (props) => {
  
  const navigate = useNavigate()
  const handleClick = ()=>{
     console.log("tubav")
     navigate("/cart")
  }


  return (
    <div>
      <div className="border-solid border-zinc-950">
        <img
          src={props.image}
          className="border-solid border-zinc-950 w-[330px] h-[500px]"
        ></img>
      </div>
      <div className="w-[330px] h-[150px] ">
        <div>
          The eligibility of our products is extremely good you can even
          exchange it .
        </div>
        <div className="flex justify-between">
          <div className=" font-serif font-extrabold text-fuchsia-600">
            Prices - {props.amount}
          </div>
          <div className="font-serif font-extrabold text-teal-300">
            Items - {props.costume}
          </div>
        </div>
        <RatingStars />
        <div className="flex">
          <div className="">
            <button className="bg-orange text-sm rounded-lg text-white"
             onClick={handleClick}>
              Add to cart
            </button>
          </div>
          <div className="">
            <button className="bg-black text-sm rounded-lg text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kidscomp;
