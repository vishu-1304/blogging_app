
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import {ImCross} from 'react-icons/im'
// import { useContext, useState } from 'react'
// import { UserContext } from '../context/UserContext'
// import { URL } from '../url'
// import axios from 'axios'
// import { Navigate, useNavigate } from 'react-router-dom'

// const CreatePost = () => {
   
//     const [title,setTitle]=useState("")
//     const [desc,setDesc]=useState("")
//     const [file,setFile]=useState(null)
//     const {user}=useContext(UserContext)
//     const [cat,setCat]=useState("")
//     const [cats,setCats]=useState([])

//     const navigate=useNavigate()

//     const deleteCategory=(i)=>{
//        let updatedCats=[...cats]
//        updatedCats.splice(i)
//        setCats(updatedCats)
//     }

//     const addCategory=()=>{
//         let updatedCats=[...cats]
//         updatedCats.push(cat)
//         setCat("")
//         setCats(updatedCats)
//     }

//     const handleCreate=async (e)=>{
//         e.preventDefault()
//         const post={
//           title,
//           desc,
//           username:user.username,
//           userId:user._id,
//           categories:cats
//         }

//         if(file){
//           const data=new FormData()
//           const filename=Date.now()+file.name
//           data.append("img",filename)
//           data.append("file",file)
//           post.photo=filename
//           // console.log(data)
//           //img upload
//           try{
//             const imgUpload=await axios.post(URL+"/api/upload",data)
//             // console.log(imgUpload.data)
//           }
//           catch(err){
//             console.log(err)
//           }
//         }
//         //post upload
//         // console.log(post)
//         try{
//           const res=await axios.post(URL+"/api/posts/create",post,{withCredentials:true})
//           navigate("/posts/post/"+res.data._id)
//           // console.log(res.data)

//         }
//         catch(err){
//           console.log(err)
//         }
//     }



//   return (
//     <div className='bg-transparent  bg-gradient-to-b from-blue-800 to-black  min-h-screen'>
//         <Navbar/>
//         <div className='px-6 md:px-[200px] mt-8 bg-transparent' >
//         <h1 className='font-bold md:text-2xl text-xl text-white'>Create a post</h1>
//         <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4 bg-transparent'>
//           <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter post title' className='px-4 py-2 outline-none'/>
//           <input onChange={(e)=>setFile(e.target.files[0])} type="file"  className='px-4 text-white'/>
//           <div className='flex flex-col'>
//             <div className='flex items-center space-x-4 md:space-x-8'>
//                 <input value={cat} onChange={(e)=>setCat(e.target.value)} className='px-4 py-2 outline-none' placeholder='Enter post category' type="text"/>
//                 <div onClick={addCategory} className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>Add</div>
//             </div>

//             {/* categories */}
//             <div className='flex px-4 mt-3 bg-transparent'>
//             {cats?.map((c,i)=>(
//                 <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
//                 <p>{c}</p>
//                 <p onClick={()=>deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
//             </div>
//             ))}
            
            
//             </div>
//           </div>
//           <textarea onChange={(e)=>setDesc(e.target.value)} rows={15} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description'/>
//           <button onClick={handleCreate} className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
//         </form>

//         </div>
//         <Footer/>
//     </div>
//   )
// }

// export default CreatePost

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ImCross } from "react-icons/im";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { URL } from "../url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i, 1);
    setCats(updatedCats);
  };

  const addCategory = () => {
    if (cat.trim() === "") return;
    setCats([...cats, cat.trim()]);
    setCat("");
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
      username: user.username,
      userId: user._id,
      categories: cats,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;

      try {
        await axios.post(URL + "/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.post(URL + "/api/posts/create", post, {
        withCredentials: true,
      });
      navigate("/posts/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Create a Post
        </h1>

        <form
          className="bg-white shadow-md rounded-xl p-6 md:p-8 flex flex-col space-y-4 md:space-y-6"
          onSubmit={handleCreate}
        >
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter post title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            className="w-full text-gray-700"
          />

          {/* Categories */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-4">
              <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 w-full"
                placeholder="Enter post category"
              />
              <button
                type="button"
                onClick={addCategory}
                className="bg-blue-600 text-white px-4 py-2 font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Add
              </button>
            </div>

            {/* Display categories */}
            <div className="flex flex-wrap mt-3 space-x-2">
              {cats.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-1 bg-gray-200 px-3 py-1 rounded-full"
                >
                  <p className="text-gray-700">{c}</p>
                  <span
                    onClick={() => deleteCategory(i)}
                    className="cursor-pointer text-gray-500 hover:text-red-500"
                  >
                    <ImCross size={12} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <textarea
            onChange={(e) => setDesc(e.target.value)}
            rows={10}
            placeholder="Enter post description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Create
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CreatePost;
