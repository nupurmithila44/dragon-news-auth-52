
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Braking = () => {
    return (
        <div className="flex">
            <button className="btn btn-primary gap-3">letest</button>
            <Marquee pauseOnHover={true} speed={150}>
                <Link className="mr-12 " to="/">I can be a React component, multiple React components.........</Link>
                <Link className="mr-12 " to="/">I can be a React component, multiple React components.........</Link>
                <Link className="mr-12 " to="/">I can be a React component, multiple React components.........</Link>
            </Marquee>
        </div>
    );
};

export default Braking;

