import React from "react";

function NavBar({ onContactClick }) {
  return (
    <div className="w-full md:w-full">
      <div className="bg-[#1e0d60] text-white flex flex-col md:flex-row justify-between items-center px-4 py-3">
        <div className="Nav-Brand text-center w-full md:w-full md:text-left">
          <h1 className="font-dancing text-2xl md:text-3xl">
            Dhanusha Murugan
          </h1>
        </div>
        <div className="Nav-Menu w-full flex flex-row justify-center mt-3 space-x-4">
          <div>
            <h1 className="text-xl md:text-2xl cursor-pointer">Home</h1>
          </div>
          <div onClick={onContactClick}>
            <h1 className="text-xl md:text-2xl cursor-pointer">Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

// import React from 'react'

// function NavBar({ onContactClick }) {
//   return (
//     <div>
//       <div className="bg-[#1e0d60] text-white flex flex-wrap justify-between items-center px-4 py-3">
//         <div className="Nav-Brand text-center w-full md:w-auto md:text-left">
//           <h1 className="font-dancing text-2xl md:text-3xl ">
//             Dhanusha Murugan
//           </h1>
//         </div>
//         <div className="Nav-Menu w-full md:w-auto flex justify-around mt-3 md:mt-0 space-x-4">
//           <div>
//             <h1 className="text-xl mr-6 md:text-2xl cursor-pointer">Home</h1>
//           </div>
//           <div onClick={onContactClick}>
//             <h1 className="text-xl md:text-2xl cursor-pointer">Contact</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar
