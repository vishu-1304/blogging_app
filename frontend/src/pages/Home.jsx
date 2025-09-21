// import axios from "axios";
// import Footer from "../components/Footer";
// import HomePosts from "../components/HomePosts";
// import Navbar from "../components/Navbar";
// import { URL } from "../url";
// import { useContext, useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Loader from "../components/Loader";
// import { UserContext } from "../context/UserContext";

// const Home = () => {
//   const { search } = useLocation();
//   const [posts, setPosts] = useState([]);  // Ensure posts is an array
//   const [noResults, setNoResults] = useState(false);
//   const [loader, setLoader] = useState(false);
//   const { user } = useContext(UserContext);

//   const fetchPosts = async () => {
//     setLoader(true);
//     try {
//       const res = await axios.get(URL + "/api/posts/" + search);
//       console.log("API Response:", res.data);  // Debugging line
//       const fetchedPosts = Array.isArray(res.data) ? res.data : [];
//       setPosts(fetchedPosts);
//       setNoResults(fetchedPosts.length === 0);
//     } catch (err) {
//       console.error("Error fetching posts:", err);
//     } finally {
//       setLoader(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, [search]);

//   return (
//     <>
//     <div className="bg-gradient-to-b from-black to-blue-500 bg-cover w-full min-h-screen">
//       <Navbar />
//       <div className="px-8 md:px-[200px] min-h-[80vh]">
//         {loader ? (
//           <div className="h-[40vh] flex justify-center items-center">
//             <Loader />
//           </div>
//         ) : !noResults ? (
//           posts?.map((post) => (
//             <Link key={post._id} to={user ? `/posts/post/${post._id}` : "/login"}>
//               <HomePosts post={post} />
//             </Link>
//           ))
//         ) : (
//           <h3 className="text-center font-bold mt-16 text-white">No posts available</h3>
//         )}
//       </div>
//       <Footer />
//       </div>
//     </>
//   );
// };

// export default Home;

import axios from "axios";
import Footer from "../components/Footer";
import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
import { URL } from "../url";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + search);
      const fetchedPosts = Array.isArray(res.data) ? res.data : [];
      setPosts(fetchedPosts);
      setNoResults(fetchedPosts.length === 0);
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <div className="bg-gray-50 w-full min-h-screen">
        <Navbar />
        <div className="px-4 md:px-[200px] py-8 min-h-[80vh]">
          
          {loader ? (
            <div className="h-[40vh] flex justify-center items-center">
              <Loader />
            </div>
          ) : !noResults ? (
            posts?.map((post) => (
              <Link
                key={post._id}
                to={user ? `/posts/post/${post._id}` : "/login"}
              >
                <HomePosts post={post} />
              </Link>
            ))
          ) : (
            <h3 className="text-center font-semibold mt-16 text-gray-600 text-lg">
              No posts available
            </h3>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
