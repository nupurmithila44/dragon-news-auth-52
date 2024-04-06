import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Nav from "../Shared/Nav/Nav";
import RightSide from "../Shared/Rightside/RightSide";


const News = () => {
    const {id} =useParams();
    
    return (
        <div>
         <Header></Header>
         <Nav></Nav>
         <div className="grid  md:grid-cols-4">
            <div className=" col-span-3">
                <h2>new details</h2>
                <p>{id}</p>
            </div>
            <div>
                <RightSide></RightSide>
            </div>

         </div>
        </div>
    );
};

export default News;