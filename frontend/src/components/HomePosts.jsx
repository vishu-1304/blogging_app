import { IF } from "../url";

const HomePosts = ({ post }) => {
  return (
    <div className="w-full mt-8">
      <div className="flex flex-col md:flex-row md:space-x-6 bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
        {/* Left - Image */}
        <div className="md:w-[40%] h-[200px] flex justify-center items-center">
          <img
            src={IF + post.photo}
            alt="image"
            className="h-full w-full object-cover md:rounded-l-xl"
          />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col md:w-[60%] p-5">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 hover:text-blue-500 transition duration-200 mb-2">
            {post.title}
          </h1>

          {/* Author & Date */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-500 text-sm mb-3">
            <p className="mb-1 md:mb-0 font-medium">@{post.username}</p>
            <div className="flex space-x-3 text-xs md:text-sm">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-700 line-clamp-3">
            {post.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePosts;

// import { IF } from "../url";

// const HomePosts = ({ post }) => {
//   return (
//     <div className="w-full mt-8">
//       <div className="flex flex-col md:flex-row md:space-x-6 bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
//         {/* Left - Image */}
//         <div className="md:w-[40%] h-[200px] flex justify-center items-center">
//           <img
//             src={IF + post.photo}
//             alt="image"
//             className="h-full w-full object-cover md:rounded-l-xl"
//           />
//         </div>

//         {/* Right - Content */}
//         <div className="flex flex-col md:w-[60%] p-4">
//           <h1 className="text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition duration-200 mb-2">
//             {post.title}
//           </h1>

//           {/* Author & Date */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-400 text-sm font-medium mb-3">
//             <p className="mb-1 md:mb-0">@{post.username}</p>
//             <div className="flex space-x-3 text-xs md:text-sm">
//               <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
//               <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
//             </div>
//           </div>

//           {/* Description */}
//           <p className="text-sm md:text-base text-gray-300 line-clamp-3">
//             {post.desc}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePosts;
