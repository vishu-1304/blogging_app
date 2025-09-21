// import { Link, useNavigate } from "react-router-dom"
// import Footer from "../components/Footer"
// import { useContext, useState } from "react"
// import axios from "axios"
// import { URL } from "../url"
// import { UserContext } from "../context/UserContext"


// const Login = () => {
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")
//   const [error,setError]=useState(false)
//   const {setUser}=useContext(UserContext)
//   const navigate=useNavigate()

//   const handleLogin=async()=>{
//     try{
//       const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
//       // console.log(res.data)
//       setUser(res.data)
//       navigate("/")

//     }
//     catch(err){
//       setError(true)
//       console.log(err)

//     }

//   }
//   return (
//     <>
//     <div className="bg-gradient-to-b from-black to-blue-500 bg-cover w-full h-screen">
//     <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
//     <h1 className="text-3xl md:text-3xl font-extrabold text-white"><Link to="/">Tourist Blogs</Link></h1>
//     <h3 className="text-white md:text-2xl"><Link to="/register">Register</Link></h3>
//     </div>
// <div className="w-full flex justify-center items-center h-[80vh] ">
//        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
//          <h1 className="text-2xl text-white font-bold text-left">Log in to your account</h1>
//          <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 rounded-lg border-black outline-0" type="text" placeholder="Enter your email" />
//          <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 rounded-lg border-black outline-0" type="password" placeholder="Enter your password" />
//          <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white  bg-black rounded-lg hover:bg-gray-500 hover:text-black ">Log in</button>
//          {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
//          <div className="flex justify-center items-center space-x-3">
//           <p className="text-white">New here?</p>
//           <p className="text-white hover:text-black"><Link to="/register">Register</Link></p>
//          </div>
//        </div>
//     </div>
    
//     </div>
//     </>
    
//   )
// }

// export default Login

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        URL + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-50 w-full min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-white shadow-sm">
        <h1 className="text-xl md:text-3xl font-extrabold text-gray-800">
          <Link to="/">Tourist Blogs</Link>
        </h1>
        <h3 className="text-lg md:text-2xl font-bold text-blue-600 hover:text-blue-800">
          <Link to="/register">Register</Link>
        </h3>
      </div>

      {/* Form */}
      <div className="flex justify-center items-center flex-1">
        <div className="bg-white shadow-md rounded-xl p-8 w-[90%] md:w-[400px] flex flex-col space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Log in to your account
          </h1>

          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            type="password"
            placeholder="Enter your password"
          />

          <button
            onClick={handleLogin}
            className="w-full py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Log in
          </button>

          {error && (
            <h3 className="text-red-500 text-sm text-center">
              Something went wrong
            </h3>
          )}

          <div className="flex justify-center items-center space-x-2 text-gray-600">
            <p>New here?</p>
            <Link
              className="text-blue-600 hover:text-blue-800 font-medium"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
