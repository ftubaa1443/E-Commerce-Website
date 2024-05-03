import { useState } from "react";

const RatingStars = () => {
    // State to manage the rating value
    const [rating, setRating] = useState(0);
  
    // Function to handle click on stars
    const handleStarClick = (starValue) => {
      setRating(starValue);
    }
 
    return (
       <div>
         {[1, 2, 3, 4, 5].map((starValue) => (
           <span
             key={starValue}
             style={{ cursor: 'pointer' }}
             onClick={() => handleStarClick(starValue)}
           >
             {starValue <= rating ? '★' : '☆'}
           </span>
         ))}
         {/* Display current rating value */}
         <p className="font-serif font-extrabold ">Current Rating: {rating}</p>
       </div>
     );
 }

 export default RatingStars