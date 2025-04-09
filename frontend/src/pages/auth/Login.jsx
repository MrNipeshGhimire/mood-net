import { useState, useContext } from "react";
//import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Toaster } from "react-hot-toast";


const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login } = useContext(AuthContext);  // Access the login function from context

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); login(formData); };

  return (
    <>
  <Toaster/>
    {/* <h2 className="text-red-500" >Hello</h2>
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Register</Link>
    </div> */}


   
<div className="py-16 mt-6">
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
    <div 
  className="hidden lg:block lg:w-1/2 bg-cover"
  style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/psychotherapy-practice-woman-psychologist-bconsulting-patient-siety-psychiatry-concept-mental-disorder-treatment-pvate-counseling-service-family-psychology-concept-flat-vector-modern-illustration_566886-15370.jpg')" }}
>
</div>
        <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Mood Tracker</h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            
            <form onSubmit={handleSubmit}>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input name="username" onChange={handleChange} className=" bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" placeholder="Enter Username" type="text" />
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input name="password" onChange={handleChange} className=" bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" placeholder="Enter Password" type="password" />
            </div>
           
            <div className="mt-8">
                <button type="submit" className="bg-primaryBg text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
            </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link to={"/register"} className="text-xs text-gray-500 uppercase">or sign up</Link>
                <Link to="/forgotPassword" className="text-xs text-gray-500">Forget Password?</Link>

                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
        </div>
    </div>
</div>


    
    </>
  );
};

export default Login;
