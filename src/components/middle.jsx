import Part from "./search-bar/indexmid"

const Middle = ()=>{
      return(
         <div className="flex justify-evenly">
             <Part image={"/src/assets/men.jpg"}  title ={"MEN "}  name ={"MEN"} click={true} navigation={'/men'} />
             <Part image={"/src/assets/women2.jpg"}  title={"WOMEN "} name={"WOMEN "} click={true} navigation={'/kid'} />
             <Part image={"/src/assets/kidsfront.jpg"}  title={"KIDS "}  name={"KIDS "} click={true} navigation={'/women'}/>
         </div>
      )
}

export default Middle