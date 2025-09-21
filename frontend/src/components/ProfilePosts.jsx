// /* eslint-disable react/prop-types */
// import {IF} from '../url'

// const ProfilePosts = ({p}) => {
//   // console.log(p)
//   return (
//     <div className="w-full flex mt-8 space-x-4">
//     {/* left */}
//     <div className="w-[35%] h-[200px] flex justify-center items-center">
//     <img src={IF+p.photo} alt="" className="h-full w-full object-cover"/>
//     </div>
//     {/* right */}
//     <div className="flex flex-col w-[65%]">
//       <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
//       {p.title}
//       </h1>
//       <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
//        <p>@{p.username}</p>
//        <div className="flex space-x-2">
//        <p>{new Date(p.updatedAt).toString().slice(0,15)}</p>
//        <p>{new Date(p.updatedAt).toString().slice(16,24)}</p>
//        </div>
//       </div>
//       <p className="text-sm md:text-lg">{p.desc.slice(0,200)+" ...Read more"}</p>
//     </div>

//     </div>
//   )
// }

// export default ProfilePosts

/* eslint-disable react/prop-types */
import { IF } from "../url";

const ProfilePosts = ({ p }) => {
  return (
    <div className="w-full mt-6 bg-white shadow-sm border border-gray-100 rounded-xl overflow-hidden flex flex-col md:flex-row hover:shadow-md transition duration-300">
      
      {/* Left - Image */}
      <div className="md:w-[35%] h-[200px] flex justify-center items-center">
        <img
          src={IF + p.photo}
          alt={p.title}
          className="h-full w-full object-cover md:rounded-l-xl"
        />
      </div>

      {/* Right - Content */}
      <div className="flex flex-col md:w-[65%] p-5">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 hover:text-blue-500 transition mb-2">
          {p.title}
        </h1>

        {/* Author & Date */}
        <div className="flex items-center justify-between text-gray-500 text-sm md:text-sm mb-3">
          <p className="font-medium">@{p.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(p.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(p.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base">
          {p.desc.slice(0, 200) + " ...Read more"}
        </p>
      </div>
    </div>
  );
};

export default ProfilePosts;
