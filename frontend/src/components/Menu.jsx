// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";
// import axios from "axios";
// import { URL } from "../url";
// import { Link, useNavigate } from "react-router-dom";

// const Menu = () => {
//   const { user, setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.get(URL + "/api/auth/logout", { withCredentials: true });
//       setUser(null);
//       navigate("/login");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="absolute top-12 right-6 md:right-32 bg-gray-900 border border-gray-700 w-[200px] rounded-lg shadow-lg p-4 flex flex-col space-y-3 z-20 animate-fadeIn">
//       {!user && (
//         <Link
//           to="/login"
//           className="text-gray-300 text-sm hover:text-white transition"
//         >
//           Login
//         </Link>
//       )}
//       {!user && (
//         <Link
//           to="/register"
//           className="text-gray-300 text-sm hover:text-white transition"
//         >
//           Register
//         </Link>
//       )}
//       {user && (
//         <Link
//           to={`/profile/${user._id}`}
//           className="text-gray-300 text-sm hover:text-white transition"
//         >
//           Profile
//         </Link>
//       )}
//       {user && (
//         <Link
//           to="/write"
//           className="text-gray-300 text-sm hover:text-white transition"
//         >
//           Write
//         </Link>
//       )}
//       {user && (
//         <Link
//           to={`/myblogs/${user._id}`}
//           className="text-gray-300 text-sm hover:text-white transition"
//         >
//           My Blogs
//         </Link>
//       )}
//       {user && (
//         <p
//           onClick={handleLogout}
//           className="text-gray-300 text-sm hover:text-red-400 cursor-pointer transition"
//         >
//           Logout
//         </p>
//       )}
//     </div>
//   );
// };

// export default Menu;

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(URL + "/api/auth/logout", { withCredentials: true });
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute top-12 right-6 md:right-32 
                    bg-white border border-gray-200 
                    w-[220px] rounded-xl shadow-lg 
                    p-4 flex flex-col space-y-3 
                    z-20 transition-all duration-200">
      
      {/* If not logged in */}
      {!user && (
        <Link
          to="/login"
          className="text-gray-600 text-sm font-medium hover:text-blue-600 transition"
        >
          Login
        </Link>
      )}
      {!user && (
        <Link
          to="/register"
          className="text-gray-600 text-sm font-medium hover:text-blue-600 transition"
        >
          Register
        </Link>
      )}

      {/* If logged in */}
      {user && (
        <Link
          to={`/profile/${user._id}`}
          className="text-gray-700 text-sm font-medium hover:text-blue-600 transition"
        >
          Profile
        </Link>
      )}
      {user && (
        <Link
          to="/write"
          className="text-gray-700 text-sm font-medium hover:text-blue-600 transition"
        >
          Write
        </Link>
      )}
      {user && (
        <Link
          to={`/myblogs/${user._id}`}
          className="text-gray-700 text-sm font-medium hover:text-blue-600 transition"
        >
          My Blogs
        </Link>
      )}
      {user && (
        <p
          onClick={handleLogout}
          className="text-red-500 text-sm font-medium cursor-pointer hover:text-red-600 transition"
        >
          Logout
        </p>
      )}
    </div>
  );
};

export default Menu;
