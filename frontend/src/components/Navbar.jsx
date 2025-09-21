import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const showMenu = () => {
    setMenu(!menu);
  };

  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between px-6 md:px-20 py-4 bg-white shadow-sm border-b">
      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide">
        <Link to="/">Trip Tales</Link>
      </h1>

      {/* Search (only on home) */}
      {path === "/" && (
        <div className="flex items-center bg-gray-100 rounded-full shadow-inner ml-4">
          <input
            onChange={(e) => setPrompt(e.target.value)}
            className="bg-transparent text-sm text-gray-700 px-4 py-2 w-40 md:w-64 focus:outline-none placeholder-gray-400"
            placeholder="Search a post..."
            type="text"
          />
          <button
            onClick={() => navigate(prompt ? "?search=" + prompt : "/")}
            className="px-4 py-2 text-gray-500 hover:text-gray-700 transition"
          >
            <BsSearch />
          </button>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
        {user ? (
          <Link
            to="/write"
            className="hover:text-gray-900 transition duration-200"
          >
            Write
          </Link>
        ) : (
          <Link
            to="/login"
            className="hover:text-gray-900 transition duration-200"
          >
            Login
          </Link>
        )}
        {user ? (
          <div onClick={showMenu} className="relative">
            <button className="cursor-pointer text-gray-600 hover:text-gray-900 transition">
              <FaBars />
            </button>
            {menu && <Menu />}
          </div>
        ) : (
          <Link
            to="/register"
            className="hover:text-gray-900 transition duration-200"
          >
            Register
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        onClick={showMenu}
        className="md:hidden text-xl text-gray-600 cursor-pointer"
      >
        <FaBars />
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;


// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { BsSearch } from "react-icons/bs";
// import { FaBars } from "react-icons/fa";
// import { useContext, useState } from "react";
// import Menu from "./Menu";
// import { UserContext } from "../context/UserContext";

// const Navbar = () => {
//   const [prompt, setPrompt] = useState("");
//   const [menu, setMenu] = useState(false);
//   const navigate = useNavigate();
//   const path = useLocation().pathname;

//   const showMenu = () => {
//     setMenu(!menu);
//   };

//   const { user } = useContext(UserContext);

//   return (
//     <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-gray-900 shadow-md">
//       {/* Logo */}
//       <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-wide">
//         <Link to="/">Tourist Blogs</Link>
//       </h1>

//       {/* Search (only on home) */}
//       {path === "/" && (
//         <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden ml-4">
//           <input
//             onChange={(e) => setPrompt(e.target.value)}
//             className="bg-transparent text-sm text-white px-3 py-2 focus:outline-none placeholder-gray-400"
//             placeholder="Search a post..."
//             type="text"
//           />
//           <button
//             onClick={() => navigate(prompt ? "?search=" + prompt : "/")}
//             className="px-3 py-2 text-gray-300 hover:text-white transition"
//           >
//             <BsSearch />
//           </button>
//         </div>
//       )}

//       {/* Desktop Menu */}
//       <div className="hidden md:flex items-center space-x-6 text-gray-200 font-medium">
//         {user ? (
//           <Link
//             to="/write"
//             className="hover:text-white transition duration-200"
//           >
//             Write
//           </Link>
//         ) : (
//           <Link
//             to="/login"
//             className="hover:text-white transition duration-200"
//           >
//             Login
//           </Link>
//         )}
//         {user ? (
//           <div onClick={showMenu} className="relative">
//             <button className="cursor-pointer hover:text-white transition">
//               <FaBars />
//             </button>
//             {menu && <Menu />}
//           </div>
//         ) : (
//           <Link
//             to="/register"
//             className="hover:text-white transition duration-200"
//           >
//             Register
//           </Link>
//         )}
//       </div>

//       {/* Mobile Menu */}
//       <div
//         onClick={showMenu}
//         className="md:hidden text-xl text-gray-300 cursor-pointer"
//       >
//         <FaBars />
//         {menu && <Menu />}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
