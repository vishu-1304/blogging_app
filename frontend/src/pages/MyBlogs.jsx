// import { Link, useLocation } from "react-router-dom"
// import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"
// import { useContext, useEffect, useState } from "react"
// import { UserContext } from "../context/UserContext"
// import axios from "axios"
// import { URL } from "../url"
// import HomePosts from "../components/HomePosts"
// import Loader from "../components/Loader"


// const MyBlogs = () => {
//     const {search}=useLocation()
//   // console.log(search)
//   const [posts,setPosts]=useState([])
//   const [noResults,setNoResults]=useState(false)
//   const [loader,setLoader]=useState(false)
//   const {user}=useContext(UserContext)
//   // console.log(user)

//   const fetchPosts=async()=>{
//     setLoader(true)
//     try{
//       const res=await axios.get(URL+"/api/posts/user/"+user._id)
//       // console.log(res.data)
//       setPosts(res.data)
//       if(res.data.length===0){
//         setNoResults(true)
//       }
//       else{
//         setNoResults(false)
//       }
//       setLoader(false)
      
//     }
//     catch(err){
//       console.log(err)
//       setLoader(true)
//     }
//   }

//   useEffect(()=>{
//     fetchPosts()

//   },[search])

//   return (
//     <div>
//         <Navbar/>
//         <div className="px-8 md:px-[200px] min-h-[80vh]">
//         {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?
//         posts.map((post)=>(
//           <>
//           <Link to={user?`/posts/post/${post._id}`:"/login"}>
//           <HomePosts key={post._id} post={post}/>
//           </Link>
//           </>
          
//         )):<h3 className="text-center font-bold mt-16 text-white">No posts available</h3>}
//         </div>
//         <Footer/>
//     </div>
//   )
// }

// export default MyBlogs

import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import HomePosts from "../components/HomePosts";
import Loader from "../components/Loader";

const MyBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/user/" + user._id);
      const fetchedPosts = Array.isArray(res.data) ? res.data : [];
      setPosts(fetchedPosts);
      setNoResults(fetchedPosts.length === 0);
    } catch (err) {
      console.log(err);
      setNoResults(true);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [user]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="px-6 md:px-[200px] py-8 flex flex-col space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">My Blogs</h1>

        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : !noResults ? (
          posts.map((post) => (
            <Link
              key={post._id}
              to={user ? `/posts/post/${post._id}` : "/login"}
            >
              <HomePosts post={post} />
            </Link>
          ))
        ) : (
          <h3 className="text-center font-bold mt-16 text-gray-500">
            No posts available
          </h3>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBlogs;
