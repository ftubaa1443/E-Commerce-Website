import MenHelper from "../search-bar/Men-comp"

const Men = ()=>{
    return(
        <div>
          <div className="flex justify-evenly m-[20px]">
            <MenHelper image={"/src/assets/man-jacket.jpg"} />
            <MenHelper image={"/src/assets/man-jeans.jpg"} amount=" 800/-" costume="Jeans" />
            <MenHelper image={"/src/assets/man-oversized-shirt.jpg"} amount=" 900/-" costume="Over-sized shirt" />
            <MenHelper image={"/src/assets/man-pant.jpg"} amount=" 600/-" costume="Pant" />
        </div>
        <div className="flex justify-evenly m-[20px]">
            <MenHelper image={"/src/assets/man-leatherjacket.jpg"} amount=" 700/-" costume="Leather - Jacket" />
            <MenHelper image={"/src/assets/man-shirt.jpg"} amount=" 800/-" costume="Shirt" />
            <MenHelper image={"/src/assets/man-trouser.jpg"} amount=" 900/-" costume="Trouser" />
            <MenHelper image={"/src/assets/men-shoes.jpg"} amount=" 600/-" costume="Shoes" />
        </div>
        
        </div>
    )
}

export default Men