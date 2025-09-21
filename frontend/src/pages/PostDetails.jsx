// import { useNavigate, useParams } from "react-router-dom"
// import Comment from "../components/Comment"
// import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"
// import {BiEdit} from 'react-icons/bi'
// import {MdDelete} from 'react-icons/md'
// import axios from "axios"
// import { URL,IF } from "../url"
// import { useContext, useEffect, useState } from "react"
// import { UserContext } from "../context/UserContext"
// import Loader from "../components/Loader"


// const PostDetails = () => {

//   const postId=useParams().id
//   const [post,setPost]=useState({})
//   const {user}=useContext(UserContext)
//   const [comments,setComments]=useState([])
//   const [comment,setComment]=useState("")
//   const [loader,setLoader]=useState(false)
//   const navigate=useNavigate()
  

//   const fetchPost=async()=>{
//     try{
//       const res= await axios.get(URL+"/api/posts/"+postId)
//       // console.log(res.data)
//       setPost(res.data)
//     }
//     catch(err){
//       console.log(err)
//     }
//   }

//   const handleDeletePost=async ()=>{

//     try{
//       const res=await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})
//       console.log(res.data)
//       navigate("/")

//     }
//     catch(err){
//       console.log(err)
//     }

//   }

//   useEffect(()=>{
//     fetchPost()

//   },[postId])

//   const fetchPostComments=async()=>{
//     setLoader(true)
//     try{
//       const res=await axios.get(URL+"/api/comments/post/"+postId)
//       setComments(res.data)
//       setLoader(false)

//     }
//     catch(err){
//       setLoader(true)
//       console.log(err)
//     }
//   }

//   useEffect(()=>{
//     fetchPostComments()

//   },[postId])

//   const postComment=async(e)=>{
//     e.preventDefault()
//     try{
//       const res=await axios.post(URL+"/api/comments/create",
//       {comment:comment,author:user.username,postId:postId,userId:user._id},
//       {withCredentials:true})
      
//       // fetchPostComments()
//       // setComment("")
//       window.location.reload(true)

//     }
//     catch(err){
//          console.log(err)
//     }

//   }


  
//   return (
//     <div>
//     <div className="min-h-screen bg-gradient-to-b from-purple-800 to-black ">
//         <Navbar/>
//         {loader?<div className=" flex-col justify-between items-center w-full min-h-screen"><Loader/></div>:<div className="px-8 md:px-[200px] mt-8">
//         <div className="flex justify-between items-center">
//          <h1 className="text-2xl font-bold text-white md:text-3xl">{post.title}</h1>
//          {user?._id===post?.userId && <div className="flex items-center justify-center space-x-2">
//             <p className="cursor-pointer" onClick={()=>navigate("/edit/"+postId)} ><BiEdit/></p>
//             <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete/></p>
//          </div>}
//         </div>
//         <div className="flex items-center text-white justify-between mt-2 md:mt-4">
//         <p>@{post.username}</p>
//        <div className="flex space-x-2">
//        <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
//        <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
//        </div>
//         </div>
//         <img src={IF+post.photo} className="w-full  mx-auto mt-8" alt=""/>
//          <p className="mx-auto mt-8 text-white">{post.desc}</p>
//          <div className="flex items-center mt-8 text-white space-x-4 font-semibold">
//           <p>Categories:</p>
//           <div className="flex justify-center items-center space-x-2">
//           {post.categories?.map((c,i)=>(
//             <>
//             <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">{c}</div>
//             </>
            
//           ))}
            
//           </div>
//          </div>
//          <div className="flex flex-col mt-4">
//          <h3 className="mt-6 mb-4 font-semibold text-white">Comments:</h3>
//          {comments?.map((c)=>(
//           <Comment key={c._id} c={c} post={post} />
//          ))}
           
//          </div>
//          {/* write a comment */}
//          <div className="w-full flex flex-col mt-4 md:flex-row">
//           <input onChange={(e)=>setComment(e.target.value)} type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
//           <button onClick={postComment} className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
//          </div>
//         </div>}
//         <Footer className="absolute"/>
//     </div>
//     </div>
//   )
// }

// export default PostDetails

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Comment from "../components/Comment";
import Loader from "../components/Loader";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { URL, IF } from "../url";
import { UserContext } from "../context/UserContext";

const PostDetails = () => {
  const { id: postId } = useParams();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [loader, setLoader] = useState(false);

  // Fetch post data
  const fetchPost = async () => {
    try {
      const res = await axios.get(`${URL}/api/posts/${postId}`);
      setPost(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch comments
  const fetchComments = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${URL}/api/comments/post/${postId}`);
      setComments(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [postId]);

  const handleDeletePost = async () => {
    try {
      await axios.delete(`${URL}/api/posts/${postId}`, { withCredentials: true });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const postComment = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    try {
      await axios.post(
        `${URL}/api/comments/create`,
        { comment, author: user.username, postId, userId: user._id },
        { withCredentials: true }
      );
      setComment("");
      fetchComments();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {loader ? (
        <div className="flex justify-center items-center h-[40vh]">
          <Loader />
        </div>
      ) : (
        <div className="px-6 md:px-[200px] py-8 flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
            {user?._id === post?.userId && (
              <div className="flex items-center space-x-4 text-gray-600">
                <BiEdit
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => navigate(`/edit/${postId}`)}
                />
                <MdDelete
                  className="cursor-pointer hover:text-red-500"
                  onClick={handleDeletePost}
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-gray-600 mt-2">
            <p>@{post.username}</p>
            <div className="flex space-x-2">
              <p>{new Date(post.updatedAt).toDateString()}</p>
              <p>{new Date(post.updatedAt).toLocaleTimeString()}</p>
            </div>
          </div>

          {post.photo && (
            <img
              src={IF + post.photo}
              alt={post.title}
              className="w-full max-h-[500px] object-cover rounded-lg mt-6"
            />
          )}

          <p className="text-gray-800 mt-6 text-lg">{post.desc}</p>

          {/* Categories */}
          <div className="flex items-center space-x-2 mt-6">
            <span className="font-semibold text-gray-700">Categories:</span>
            {post.categories?.map((c, i) => (
              <div
                key={i}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {c}
              </div>
            ))}
          </div>

          {/* Comments */}
          <div className="mt-8">
            <h3 className="font-semibold text-gray-700 mb-4 text-lg">Comments</h3>
            <div className="flex flex-col space-y-3">
              {comments.map((c) => (
                <Comment key={c._id} c={c} post={post} />
              ))}
            </div>

            {/* Add comment */}
            {user && (
              <form
                onSubmit={postComment}
                className="flex flex-col md:flex-row mt-4 space-y-2 md:space-y-0 md:space-x-2"
              >
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-1 px-4 py-2 border rounded-lg outline-none border-gray-300"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Add Comment
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PostDetails;
