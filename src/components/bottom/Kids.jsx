import Kidscomp from "../search-bar/Kids-comp"

export const Kid = ()=>{
    return(
        <div>
            <div className="flex justify-evenly m-[20px]">
            <Kidscomp image={"/src/assets/kids-girls.jpg"} amount=" 700/-" costume="Sweater" />
            <Kidscomp image={"/src/assets/kids-girls2.jpg"} amount=" 800/-" costume="Woolen Frocks" />
            <Kidscomp image={"/src/assets/kids-suits.jpg"} amount=" 900/-" costume="Outfit" />
            <Kidscomp image={"/src/assets/kids.jpg"} amount=" 600/-" costume="Trouser" />
            </div>
            <div className="flex justify-evenly m-[20px] ">
            <Kidscomp image={"/src/assets/little-girl-holding-seasonal-shopping-bags.jpg"} amount=" 600/-" costume="Long Sweater" />
            <Kidscomp image={"/src/assets/full-shot-kids-posing-together.jpg"} amount=" 700/-" costume="Jeans-Shirt" />
            <Kidscomp image={"/src/assets/kids-sunglasses.jpg"} amount=" 850/-" costume="Jackets" />
            <Kidscomp image={"/src/assets/interior-kids-room-decoration-with-clothes.jpg"} amount=" 900/-" costume="Flamper" />
            </div>
        </div>
    )
}