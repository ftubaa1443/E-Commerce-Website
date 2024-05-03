const MenHelper = (props) => {
  return (
    <div>
      <div className="border-solid border-zinc-950"><img src ={props.image} className="border-solid border-zinc-950 w-[330px] h-[500px]" /></div>
      <div className="w-[330px] h-[150px] ">
        <div className=" font-bold ">
          The eligibility of our products is extremely good you can even
          exchange it .
        </div>
        <div className="flex justify-between">
          <div className=" font-serif font-extrabold text-blue-700">
            Prices - {props.amount} 
          </div>
          <div className="font-serif font-extrabold text-purple-950">
            Items - {props.costume}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenHelper;
