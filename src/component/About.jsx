import React from "react";
import about from "../image/aboutme.jpg"; // Ensure this is the correct path to your image

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-full md:w-full mt-6">
      <div className="max-w-3xl w-full md:w-auto text-left text-gray-800 ml-4 pt-6 pb-6  px-4 md:px-0">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">About Me</h2>{" "}
          {/* Increased font size */}
        </div>
        <div className="mb-4">
          <p className="text-lg mb-4 ">
            {" "}
            {/* Increased font size */}
            Hi, I'm Dhanusha Murugan, a frontend developer with a background in
            commerce. After completing my B.COM, I discovered my passion for
            creating responsive and user-friendly web applications, leading me
            to pursue frontend development.
          </p>
          <p className="text-lg mb-4">
            {" "}
            {/* Increased font size */}
            With skills in HTML, CSS, JavaScript, and various frameworks, I
            bring a unique perspective combining business insights with
            technical expertise. I’m always eager to learn, stay updated with
            industry trends, and collaborate with others to build high-quality
            web solutions.
          </p>
          <p className="text-lg ">
            {" "}
            {/* Increased font size */}
            Explore my portfolio to see my projects and growth as a developer.
            Let’s connect!
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Certification</h2>{" "}
          {/* Increased font size */}
        </div>
        <div className="mb-4">
          <p className="text-lg">
            {" "}
            {/* Increased font size */}
            Front-End Developer
          </p>
          <p className="text-lg">
            {" "}
            {/* Increased font size */}
            Institute: Zhahi Tech Training
          </p>
          <p className="text-lg">
            {" "}
            {/* Increased font size */}
            Year: 2024
          </p>
        </div>
      </div>
      <div className="relative mb-8 w-full md:w-auto">
        <img
          src={about}
          alt="about-img"
          className="w-full h-auto max-w-lg mx-auto" // Decreased image size
        />
      </div>
    </div>
  );
}

export default About;
