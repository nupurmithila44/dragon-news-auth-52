import Header from "../Shared/Header/Header";
import Nav from "../Shared/Nav/Nav";
import RightSide from "../Shared/Rightside/RightSide";
import LiftSide from "../Shared/leftSide/LiftSide";
import Braking from "./Braking";


const Home = () => {

    return (
        <div>
            <Header></Header>
            <Braking></Braking>
            <Nav></Nav>
            <h2 className=" text-3xl font-Poppins font-bold">this is home</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LiftSide></LiftSide>
                </div>
                <div className="col-span-2 border">
                    <h2>coming soon....</h2>
                </div>
                <div className="border">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;