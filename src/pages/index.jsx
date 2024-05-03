import Bottom from "../components/Bottom";
import Navbar from "../components/PageHeader";
import Middle from "../components/middle";



function MainPage() {
  return (
    <div className="mt-10 mx-4">
      <Navbar/>
      <Bottom/>
      <Middle/>
   </div>
  );
} 

export default MainPage;
