import React from "react";

import html from "../image/html.png";
import css from "../image/css.png";
import js from "../image/java-script.png";
import reactjs from "../image/react.png";
import vscode from "../image/vsCode.png";
import bootstrap from "../image/bootsrap.jpg";
import tailwind from "../image/tailwindlogo.png";
import github from "../image/github.png";

function Skills() {
  return (
    <div className="w-full px-5 py-2 mt-4 ">
      <div className="text-start text-lg">
        <h2 className="text-2xl font-semibold mb-4   ml-4">Skills</h2>
      </div>

      <div className="flex flex-wrap justify-center  mb-10">
        <div className="flex flex-col items-center border border-gray-300 rounded-lg m-8 p-3 w-28">
          <img src={html} alt="html-icon" className="w-14 mb-2" />
          <h5 className="text-center">HTML</h5>
        </div>
        <div className="flex flex-col items-center border border-gray-300 rounded-lg m-8 p-3 w-28">
          <img src={css} alt="css-icon" className="w-14 mb-2" />
          <h5 className="text-center">CSS</h5>
        </div>
        <div className="flex flex-col items-center border border-gray-300 rounded-lg m-8 p-3 w-28">
          <img src={js} alt="js-icon" className="w-14 mb-2" />
          <h5 className="text-center">JAVASCRIPT</h5>
        </div>
        <div className="flex flex-col items-center border border-gray-300 rounded-lg m-8 p-3 w-28">
          <img src={reactjs} alt="reactjs-icon" className="w-14 mb-2" />
          <h5 className="text-center">React.JS</h5>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center border border-gray-300 rounded-lg m-8 p-3 w-28">
          <img src={vscode} alt="vscode-icon" className="w-14 mb-2" />
          <h5 className="text-center">VSCode</h5>
        </div>
        <div className="flex flex-col items-center border border-gray-300 rounded-lg m-8 p-3 w-28">
          <img src={bootstrap} alt="bootstrap-icon" className="w-14 mb-2" />
          <h5 className="text-center">Bootstrap</h5>
        </div>
        <div className="flex flex-col items-center border border-gray-300 rounded-lg m-8 p-3 w-28">
          <img src={tailwind} alt="Tailwind CSS Logo" className="w-14 mb-2" />
          <h5 className="text-center">Tailwind CSS</h5>
        </div>
        <div className="flex flex-col items-center border border-gray-300 rounded-lg m-8 p-3 w-28">
          <img src={github} alt="github-icon" className="w-14 mb-2" />
          <h5 className="text-center">Github</h5>
        </div>
      </div>
    </div>
  );
}

export default Skills;
