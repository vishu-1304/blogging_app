import axios from "axios";
import { MdDelete } from "react-icons/md";
import { URL } from "../url";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Comment = ({ c, post }) => {
  const { user } = useContext(UserContext);

  const deleteComment = async (id) => {
    try {
      await axios.delete(URL + "/api/comments/" + id, { withCredentials: true });
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-100 my-3">
      {/* Top Row: Author + Date + Delete */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">@{c.author}</h3>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <p>{new Date(c.updatedAt).toString().slice(0, 15)}</p>
          <p>{new Date(c.updatedAt).toString().slice(16, 24)}</p>

          {user?._id === c?.userId && (
            <button
              onClick={() => deleteComment(c._id)}
              className="text-red-500 hover:text-red-700 transition"
            >
              <MdDelete size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Comment Text */}
      <p className="mt-2 text-gray-700 text-sm leading-relaxed">{c.comment}</p>
    </div>
  );
};

export default Comment;


// import axios from "axios";
// import { MdDelete } from "react-icons/md";
// import { URL } from "../url";
// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

// const Comment = ({ c, post }) => {
//   const { user } = useContext(UserContext);

//   const deleteComment = async (id) => {
//     try {
//       await axios.delete(URL + "/api/comments/" + id, { withCredentials: true });
//       window.location.reload(true);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-100 my-3">
//       {/* Top Row: Author + Date + Delete */}
//       <div className="flex items-center justify-between">
//         <h3 className="font-semibold text-gray-800">@{c.author}</h3>
//         <div className="flex items-center space-x-4 text-sm text-gray-500">
//           <p>{new Date(c.updatedAt).toString().slice(0, 15)}</p>
//           <p>{new Date(c.updatedAt).toString().slice(16, 24)}</p>

//           {user?._id === c?.userId && (
//             <button
//               onClick={() => deleteComment(c._id)}
//               className="text-red-500 hover:text-red-700 transition"
//             >
//               <MdDelete size={18} />
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Comment Text */}
//       <p className="mt-2 text-gray-700 text-sm leading-relaxed">{c.comment}</p>
//     </div>
//   );
// };

// export default Comment;
