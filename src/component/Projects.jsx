import React from "react";
import foodpanda from "../image/food-panda project -2.jpeg";
import heaven from "../image/heaven-project.jpeg";
import recipebox from "../image/recipebox.png";
import multitasker from "../image/multitasker.jpeg";

function Projects() {
  return (
    <div className="w-full px-5 md:w-full py-4">
      <div className="text-start text-lg mb-4">
        <h2 className="text-2xl font-semibold mt-5 mb-8">Projects</h2>
      </div>

      {/* Row 1 - FoodPanda and Heaven Projects */}
      <div className="flex flex-wrap justify-center mb-10">
        {/* Card for FoodPanda Project */}
        <div className="border border-gray-300 text-gray-600 rounded-lg m-2 p-4 flex flex-col items-center w-full max-w-xs sm:max-w-md">
          <img
            src={foodpanda}
            alt="foodpanda-img"
            className="w-full mb-4 rounded"
          />
          <h2 className="text-xl text-center font-semibold mb-2">
            E-Commerce Website
          </h2>
          <p className="text-sm sm:text-lg text-center mb-2">
            Replicated a Food Panda landing page, creating an engaging and
            interactive design to showcase platform features. Enhanced HTML
            design for layout and CSS for styling to ensure a visually appealing
            user experience.
          </p>
          <a
            href="https://github.com/DhanushaMurugan/Foodpanda-project"
            className="text-blue-700 text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-sm md:text-base">
              https://github.com/DhanushaMurugan/Foodpanda-project
            </span>
          </a>
        </div>

        {/* Card for Heaven Project */}
        <div className="border border-gray-300 text-gray-600 rounded-lg m-2 p-4 flex flex-col items-center w-full max-w-xs sm:max-w-md">
          <img src={heaven} alt="heaven" className="w-full mb-4 rounded" />
          <h2 className="text-xl text-center font-semibold mb-2">
            E-Commerce Website (Heaven Masala)
          </h2>
          <p className="text-sm sm:text-lg text-center mb-2">
            Designed a responsive landing page titled "Heaven Masala," featuring
            a hero section, comprehensive product features, and customer
            testimonials.
          </p>
          <a
            href="https://github.com/DhanushaMurugan/Heaven-project"
            className="text-blue-700 text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-sm md:text-base">
              https://github.com/DhanushaMurugan/Heaven-project
            </span>
          </a>
        </div>
      </div>

      {/* Row 2 - RecipeBox and Multitasker Projects */}
      <div className="flex flex-wrap justify-center mb-10">
        {/* Card for RecipeBox Project */}
        <div className="border border-gray-300 text-gray-600 rounded-lg m-2 p-4 flex flex-col items-center w-full max-w-xs sm:max-w-md">
          <img
            src={recipebox}
            alt="recipebox-img"
            className="w-full mb-4 rounded"
          />
          <h2 className="text-xl text-center font-semibold mb-2 mt-4">
            Recipe Box - Interactive Website
          </h2>
          <p className="text-sm sm:text-lg text-center mb-2">
            The Recipe Box website is an interactive platform designed to help
            users discover, manage, and share a variety of recipes from
            different cuisines. Built using React.js and styled with Tailwind
            CSS, the website features a clean and user-friendly interface that
            enhances the overall cooking experience.
          </p>
          <a
            href="https://recipeboxhub.netlify.app/"
            className="text-blue-700 text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://recipeboxhub.netlify.app
          </a>
        </div>

        {/* Card for Multitasker Project */}
        <div className="border border-gray-300 text-gray-600 rounded-lg m-2 p-4 flex flex-col items-center w-full max-w-xs sm:max-w-md">
          <img
            src={multitasker}
            alt="multitasker-img"
            className="w-full mb-4 rounded"
          />
          <h2 className="text-xl text-center font-semibold mb-2 mt-4">
            Multitasker Web Application
          </h2>
          <p className="text-sm sm:text-lg text-center mb-2">
            The Multitasker website is a versatile web application designed to
            help users manage their tasks efficiently. With an intuitive
            interface and robust functionality, this application allows users to
            create, edit, delete, and categorize tasks with ease. Developed
            using React.js and styled with Tailwind CSS, the Multitasker app is
            a perfect tool for enhancing productivity.
          </p>
          <a
            href="https://multitasker.netlify.app/"
            className="text-blue-700 text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://multitasker.netlify.app
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;

// import React from "react";
// import foodpanda from "../image/food-panda project -2.jpeg";
// import heaven from "../image/heaven-project.jpeg";
// import recipebox from "../image/recipebox.png";
// import multitasker from "../image/multitasker.jpeg";

// function Projects() {
//   return (
//     <div className="w-full px-5 py-4">
//       <div className="text-start text-lg mb-4">
//         <h2 className="text-2xl font-semibold mt-5 mb-8">Projects</h2>
//       </div>

//       {/* Row 1 - FoodPanda and Heaven Projects */}
//       <div className="flex flex-wrap justify-center mb-10">
//         {/* Card for FoodPanda Project */}
//         <div className="border border-gray-300 text-gray-600 rounded-lg m-2 p-4 flex flex-col items-center w-full md:w-auto lg:max-w-lg">
//           <img
//             src={foodpanda}
//             alt="foodpanda-img"
//             className="w-full mb-4 rounded"
//           />
//           <h2 className="text-2xl text-center font-semibold mb-2">
//             E-Commerce Website
//           </h2>
//           <p className="text-lg text-center mb-2">
//             Replicated a Food Panda landing page, creating an engaging and
//             interactive design to showcase platform features. Enhanced HTML
//             design for layout and CSS for styling to ensure a visually appealing
//             user experience.
//           </p>
//           <a
//             href="https://github.com/DhanushaMurugan/Foodpanda-project"
//             className="text-blue-700"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             https://github.com/DhanushaMurugan/Foodpanda-project
//           </a>
//         </div>

//         {/* Card for Heaven Project */}
//         <div className="border border-gray-300 text-gray-600 rounded-lg m-2 p-4 flex flex-col items-center w-full md:w-auto lg:max-w-lg">
//           <img src={heaven} alt="heaven" className="w-full mb-4 rounded" />
//           <h2 className="text-2xl text-center font-semibold mb-2">
//             E-Commerce Website (Heaven Masala)
//           </h2>
//           <p className="text-lg text-center mb-2">
//             Designed a responsive landing page titled "Heaven Masala," featuring
//             a hero section, comprehensive product features, and customer
//             testimonials.
//           </p>
//           <a
//             href="https://github.com/DhanushaMurugan/Heaven-project"
//             className="text-blue-700"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             https://github.com/DhanushaMurugan/Heaven-project
//           </a>
//         </div>
//       </div>

//       {/* Row 2 - RecipeBox and Multitasker Projects */}
//       <div className="flex flex-wrap justify-center mb-10">
//         {/* Card for RecipeBox Project */}
//         <div className="border border-gray-300 text-gray-600 rounded-lg m-2 p-4 flex flex-col items-center w-full md:w-auto lg:max-w-lg">
//           <img
//             src={recipebox}
//             alt="recipebox-img"
//             className="w-full mb-4 rounded"
//           />
//           <h2 className="text-2xl text-center font-semibold mb-2 mt-4">
//             Recipe Box - Interactive Website
//           </h2>
//           <p className="text-lg text-center mb-2">
//             The Recipe Box website is an interactive platform designed to help
//             users discover, manage, and share a variety of recipes from
//             different cuisines. Built using React.js and styled with Tailwind
//             CSS, the website features a clean and user-friendly interface that
//             enhances the overall cooking experience.
//           </p>
//           <a
//             href="https://recipeboxhub.netlify.app/"
//             className="text-blue-700"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             https://recipeboxhub.netlify.app
//           </a>
//         </div>

//         {/* Card for Multitasker Project */}
//         <div className="border border-gray-300 text-gray-600 rounded-lg m-2 p-4 flex flex-col items-center w-full md:w-auto lg:max-w-lg">
//           <img
//             src={multitasker}
//             alt="multitasker-img"
//             className="w-full mb-4 rounded"
//           />
//           <h2 className="text-2xl text-center font-semibold mb-2 mt-4">
//             Multitasker Web Application
//           </h2>
//           <p className="text-lg text-center mb-2">
//             The Multitasker website is a versatile web application designed to
//             help users manage their tasks efficiently. With an intuitive
//             interface and robust functionality, this application allows users to
//             create, edit, delete, and categorize tasks with ease. Developed
//             using React.js and styled with Tailwind CSS, the Multitasker app is
//             a perfect tool for enhancing productivity.
//           </p>
//           <a
//             href="https://multitasker.netlify.app/"
//             className="text-blue-700"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             https://multitasker.netlify.app
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;

// import React from "react";
// import foodpanda from "../image/food-panda project -2.jpeg";
// import heaven from "../image/heaven-project.jpeg";
// import recipebox from "../image/recipebox.png" ;
// import multitasker from "../image/multitasker.jpeg"

// function Projects() {
//   return (
//     <div className="w-full px-5 py-4">
//       <div className="text-start text-lg mb-4">
//         <h2 className="text-2xl font-semibold mt-5 mb-8">Projects</h2>
//       </div>

//       <div className="flex flex-wrap justify-center mb-10">
//         {/* Card for FoodPanda Project */}
//         <div className="border border-gray-300 text-gray-600 rounded-lg m-2 p-4 flex flex-col items-center w-full max-w-lg">
//           <img src={foodpanda} alt="foodpanda-img" className="w-full mb-4" />
//           <h2 className="text-2xl font-semibold mb-2">E-Commerce Website</h2>
//           <p className="text-lg text-center mb-2">
//             {" "}
//             Replicated a Food Panda landing page, creating an engaging and
//             interactive design to showcase platform features. Enhanced HTML
//             design for layout and CSS for styling to ensure a visually appealing
//             user experience
//           </p>
//           <a
//             href="https://github.com/DhanushaMurugan/Foodpanda-project"
//             className="text-blue-700"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             https://github.com/DhanushaMurugan/Foodpanda-project
//           </a>
//         </div>

//         {/* Card for Heaven Project */}
//         <div className="border border-gray-300 text-gray-600 rounded-lg m-2 p-4 flex flex-col items-center w-full max-w-lg">
//           <img src={heaven} alt="heaven" className="w-full mb-4" />
//           <h2 className="text-2xl font-semibold mb-2">
//             E-Commerce Website (Heaven Masala)
//           </h2>
//           <p className="text-lg text-center mb-2">
//             Designed a responsive landing page titled "Heaven Masala"featuring a
//             hero section, comprehensive product features, and customer
//             testimonials.
//           </p>
//           <a
//             href="https://github.com/DhanushaMurugan/Heaven-project"
//             className="text-blue-700"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             https://github.com/DhanushaMurugan/Heaven-project
//           </a>
//         </div>
//       </div>

//       <div className="flex flex-wrap justify-center mb-10">
//         {/* Card for multitasker Project */}
//         <div className="border border-gray-300 text-gray-600 rounded-lg m-2 p-4 flex flex-col items-center w-full max-w-lg">
//           <img src={recipebox} alt="foodpanda-img" className="w-full mb-4" />
//           <h2 className="text-2xl font-semibold mb-2 mt-4">
//             Recipe Box - interactive Website
//           </h2>
//           <p className="text-lg text-center mb-2">
//             The Recipe Box website is an interactive platform designed to help
//             users discover, manage, and share a variety of recipes from
//             different cuisines. Built using React.js and styled with Tailwind
//             CSS, the website features a clean and user-friendly interface that
//             enhances the overall cooking experience.
//           </p>
//           <a
//             href="https://recipeboxhub.netlify.app/"
//             className="text-blue-700"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             https://recipeboxhub.netlify.app
//           </a>
//         </div>

//         {/* Card for recipebox Project */}
//         <div className="border border-gray-300 text-gray-600 rounded-lg m-2 p-4 flex flex-col items-center w-full max-w-lg">
//           <img src={multitasker} alt="heaven" className="w-full mb-4" />
//           <h2 className="text-2xl font-semibold mb-2 mt-4">
//             Multitasker Web Application
//           </h2>
//           <p className="text-lg text-center mb-2">
//             The Multitasker website is a versatile web application designed to
//             help users manage their tasks efficiently. With an intuitive
//             interface and robust functionality, this application allows users to
//             create, edit, delete, and categorize tasks with ease. Developed
//             using React.js and styled with Tailwind CSS, the Multitasker app is
//             a perfect tool for enhancing productivity.
//           </p>
//           <a
//             href="https://multitasker.netlify.app/"
//             className="text-blue-700"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             https://multitasker.netlify.app
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;
