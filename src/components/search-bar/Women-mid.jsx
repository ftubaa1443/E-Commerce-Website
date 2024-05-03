const WomenPage = (props) => {
  return (
    <div className="border-4 p-2 rounded-2xl ">
      <div className="m-[20px]">
        {/* <div className="absolute"> */}
          <img src={props.image} className="w-[520px] h-[580px]"></img>
        {/* <div className="relative">
          <img src="/src/assets/fast-buy-3048.svg" />
        </div> */}
        {/* </div> */}
      </div>
      <div>
        <div className="font-bold rounded-2xl ring ring-pink-500 ring-offset-4">
          <div className="flex justify-evenly">
            The amount is{" "}
            <div className="text-lg font-serif font-bold text-fuchsia-600">
              {" "}
              {props.amount}
            </div>{" "}
            you can order this amazing by placing{" "}
          </div>
          <div className="flex">
            <div className="mx-[14px]">order on it </div>
            <div className="mx-[1px]  font-serif font-bold text-fuchsia-600">
              {props.costume}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenPage;
