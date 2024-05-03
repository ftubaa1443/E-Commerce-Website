import WomenPage from "../search-bar/Women-mid"

export const Women = ()=>{
     return(
        <div>
            <div className="flex m-[20px] ">
            <WomenPage image={"/src/assets/hijab.jpg"} amount={"600/-"} costume={"Hijab"} />
            <WomenPage image={"/src/assets/jeans.jpg"} amount={"700/-"} costume={"Jeans"} />
            <WomenPage image={"/src/assets/shopping.jpg"} amount={"1800/-"} costume={"Jacket"} />
            </div>
            <div className="flex m-[20px] ">
            <WomenPage image={"/src/assets/suits.jpg"} amount={"1500/-"} costume={"Suit"} />
            <WomenPage image={"/src/assets/women.jpg"} amount={"500/-"} costume={"Kurti"} />
            <WomenPage image={"/src/assets/women2.jpg"} amount={"2000/-"} costume={"Winter-Out"} /> 
            </div>   
        </div>
     )
}