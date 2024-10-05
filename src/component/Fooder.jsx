import React from "react";
import phoneicon from "../image/telephone.png";
import gmailicon from "../image/gmail.png";
import githubicon from "../image/github1.png";

function Fooder() {
  const resume = "/DhanushaMResume-final.pdf";

  return (
    <div className="border-2 md:w-full border-gray-300 bg-[#1e0d60] text-white text-lg">
      <div className="flex flex-col md:flex-row justify-around p-8">
        {/* Contact Information */}
        <div className="text-left w-full md:w-auto mb-4 md:mb-0">
          <h3 className="text-2xl mb-4">Contact Me</h3>

          <div className="flex items-center mb-4">
            <img src={phoneicon} alt="phone-icon" className="w-12" />
            <p className="ml-2">+91 6385499934</p>
          </div>

          <div className="flex items-center mb-4">
            <img src={gmailicon} alt="gmail-icon" className="w-9" />
            <p className="ml-2">mdhanusha7@gmail.com</p>
          </div>

          <div className="flex items-center mb-4">
            <img src={githubicon} alt="github-icon" className="w-11" />
            <a
              href="https://github.com/DhanushaMurugan"
              className="ml-2 text-white hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/DhanushaMurugan
            </a>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="w-full md:w-1/4 flex flex-col items-center justify-center mb-4 md:mb-0">
          <a href={resume} download>
            <button className="bg-white text-black font-medium text-lg py-3 px-4 rounded-full shadow-md hover:bg-gray-200 w-full md:w-auto">
              Download Resume
            </button>
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center py-4">
        <h4 className="text-sm md:text-lg">Developed by Dhanusha Murugan.</h4>
      </div>
    </div>
  );
}

export default Fooder;

// import React from "react";
// import phoneicon from "../image/telephone.png";
// import gmailicon from "../image/gmail.png";
// import githubicon from "../image/github1.png";

// function Fooder() {
//      const resume = "/DhanushaMResume-final.pdf";
//   return (
//     <div className="border-2 border-gray-300 bg-[#1e0d60] text-white text-lg">
//       <div className="flex flex-col md:flex-row justify-around p-8">
//         <div className="text-left w-full md:w-1/2 mb-4 md:mb-0">
//           <h3 className="text-2xl mb-4">Contact Me</h3>

//           <div className="flex items-center mb-4">
//             <img src={phoneicon} alt="phone-icon" className="w-12" />
//             <p className="ml-2">+91 6385499934</p>
//           </div>

//           <div className="flex items-center mb-4">
//             <img src={gmailicon} alt="gmail-icon" className="w-9" />
//             <p className="ml-2">mdhanusha7@gmail.com</p>
//           </div>

//           <div className="flex items-center mb-4">
//             <img src={githubicon} alt="github-icon" className="w-11" />
//             <a
//               href="https://github.com/DhanushaMurugan"
//               className="ml-2 text-white hover:underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               https://github.com/DhanushaMurugan
//             </a>
//           </div>
//         </div>

//         <div className="w-full md:w-1/4 flex flex-col items-center justify-center">
//           <a href={resume} download>
//             <button className="bg-white text-black font-medium text-lg py-3 px-4 rounded-full shadow-md hover:bg-gray-200">
//               Download Resume
//             </button>
//           </a>
//         </div>
//       </div>

//       <div className="text-center py-4">
//         <h4>Developed by Dhanusha Murugan.</h4>
//       </div>
//     </div>
//   );
// }

// export default Fooder;
