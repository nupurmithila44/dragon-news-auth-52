import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "../Shared/Nav/Nav";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {

    const {signInUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleLogin = e =>{
        e.preventDefault ();
        console.log(e.currentTarget)
        const form =new FormData(e.currentTarget)
        const email = form.get('email')        
        const password = form.get('password')
        signInUser(email, password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state? location.state : '/')
        })
        .catch(error =>{
            console.error(error)
        })
       
    }
    return (
        <>
        <Nav></Nav>
         <div className="w-[40%] mx-auto min-w-[500px]  p-6 mt-9 border bg-gray-100 text-center items-center">
            <h2 className="text-2xl font-bold mb-4">Login your Account</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <p>Email address</p>
                    <input className="input input-bordered w-full" type="email" name="email" placeholder="your email" required id="" />
                </div>
                <div className="mb-4">
                    <p>password</p>
                    <input className="input input-bordered w-full" type="password" name="password" placeholder="password" required id="" />
                </div>
                <div className="mb-4">
                  <button className="btn btn-primary w-full">login</button>
                </div>
            </form>
            <p>Do not have an account? <Link className="font-bold text-purple-600" to="/register">register</Link></p>
        </div>
        </>
       
    );
};

export default Login;