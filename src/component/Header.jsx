import React from "react";
import profile from "../image/profile.png"; // Ensure this is the correct path to your image

function Header({ onContactClick }) {
  const resume = "/DhanushaMResume-final.pdf";

  return (
    <div className="flex flex-col md:flex-row w-full justify-around p-4 mt-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-full w-full mx-auto">
        {/* Left Side - Text Content */}
        <div className="header-content w-full md:w-2/3 text-left space-y-4 flex flex-col justify-center ml-5 md:mr-8">
          <p className="text-2xl">Hi there,</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            I'm Dhanusha Murugan
          </h2>
          <h5 className="text-2xl text-gray-600">Front-end Developer...</h5>
          <hr className="border-gray-300 my-4" />
          {/* Buttons */}
          <div className="header-button space-x-4">
            <button
              onClick={onContactClick}
              className="bg-[#1e0d60] text-xl text-white px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300"
            >
              Contact Me
            </button>
            <a href={resume} download>
              <button className="bg-[#1e0d60] text-xl text-white px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300">
                Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="profile mt-8 md:mt-0 w-full md:w-1/3 flex justify-center items-center md:justify-start">
          <img
            src={profile}
            alt="profile-img"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg" // Adjusted image size
          />
        </div>
      </div>

      <div className="py-10">
        <hr />
      </div>
    </div>
  );
}

export default Header;

// import React from "react";
// import profile from "../image/profile.png"; // Ensure this is the correct path to your image

// function Header({ onContactClick }) {
//   const resume = "/DhanushaMResume-final.pdf"
//   return (
//     <div className="flex flex-col md:flex-row w-full justify-around p-4 mt-6 md:p-8">
//       <div className="flex flex-col md:flex-row items-center justify-between max-w-full w-full mx-auto">
//         {/* Left Side - Text Content */}
//         <div className="header-content w-full md:w-2/3 text-left space-y-4 flex flex-col justify-center ml-5 md:mr-8">
//           <p className="text-2xl">Hi there,</p>
//           <h2 className="text-3xl font-bold">I'm Dhanusha Murugan</h2>
//           <h5 className="text-2xl text-gray-600">Front-end Developer...</h5>
//           <hr className="border-gray-300 my-4" />
//           {/* Buttons */}
//           <div className="header-button space-x-4">
//             <button
//               onClick={onContactClick}
//               className="bg-[#1e0d60] text-xl text-white px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300"
//             >
//               Contact Me
//             </button>
//             <a href={resume} download>
//               <button className="bg-[#1e0d60] text-xl text-white px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300">
//                 Download Resume
//               </button>
//             </a>
//           </div>
//         </div>

//         {/* Right Side - Profile Image */}
//         <div className="profile mt-8 md:mt-0 w-full md:w-1/3 flex justify-center items-center md:justify-start">
//           <img
//             src={profile}
//             alt="profile-img"
//             className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg" // Adjusted image size
//           />
//         </div>
//       </div>

//       <div className="py-10">
//         <hr />
//       </div>
//     </div>
//   );
// }

// export default Header;
