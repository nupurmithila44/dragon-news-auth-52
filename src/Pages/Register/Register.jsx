
import { useContext } from "react";
import Nav from "../Shared/Nav/Nav";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {
    const {createUser}= useContext(AuthContext)
   

const handleLogin = e =>{
    e.preventDefault ();
    console.log(e.currentTarget)
    const form =new FormData(e.currentTarget)
    const name = form.get('name')
    const PhotoUrl = form.get('photo')
    const email = form.get('email')        
    const password = form.get('password')
    console.log(name, PhotoUrl, email, password)
    createUser(email,password)  
    .then(result =>{
        console.log(result.user)
    })
    .catch(error =>{
        console.error(error)
    })
   
}
    return (
        <>
        <Nav></Nav>
         <div className="w-[40%] mx-auto min-w-[500px]  p-6 mt-9 border bg-gray-100  items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">Register your Account</h2>
            <form onSubmit={handleLogin} >
            <div className="mb-4">
                    <p>Your Name</p>
                    <input className="input input-bordered w-full" type="text" name="name" placeholder="your name" required id="" />
                </div>
                <div className="mb-4">
                    <p>photo url</p>
                    <input className="input input-bordered w-full" type="photo" name="photo" placeholder="your photo" required id="" />
                </div>
            <div className="mb-4">
                    <p>Email address</p>
                    <input className="input input-bordered w-full" type="email" name="email" placeholder="your email" required id="" />
                </div>
                <div className="mb-4">
                    <p>password</p>
                    <input className="input input-bordered w-full" type="password" name="password" placeholder="password" required id="" />
                </div>
                <p> <input type="checkbox" name="" id="" /> Accept terms & conditions</p>
                <div className="mb-4">
                  <button className="btn btn-primary w-full">login</button>
                </div>
            </form>
            
            
        </div>
        </>
    );
};

export default Register;