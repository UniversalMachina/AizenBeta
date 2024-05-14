import React, { useState } from 'react';
import { FiFileText } from 'react-icons/fi'; // Importing file icon from react-icons


const TextEditor = ({ fileContents }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
    setActiveTab(file);
  };

  const handleTabClick = (file) => {
    setActiveTab(file);
  };

const renderTabs = () => {
  if (Object.keys(fileContents).length > 5) {
    return (
      <div className="flex bg-[#202020] p-2 overflow-x-auto shadow-lg w-[1200px] ">
        {Object.keys(fileContents).map((file) => (
          <div
            key={file}
            className={`p-2 mr-2 cursor-pointer text-white flex items-center text-lg
                        ${activeTab === file ? 'bg-[#1a1a1a]' : 'bg-[#252525]'}
                        hover:bg-[#303030] transition duration-150 ease-in-out text-[20px] pr-[25px] font-roboto`}
            onClick={() => handleTabClick(file)}
          >
            {file}
          </div>
        ))}
      </div>
    );
  }
  return null;
};


  return (
    <div className="flex justify-center">


<div className="w-1/2 scrollbar-hide bg-[#202020] h-[700px] overflow-y-auto shadow-lg justify-center">
  {Object.keys(fileContents).map((file) => (
    <div
      key={file}
      className={`p-3 cursor-pointer text-white flex items-center text-lg 
                  ${selectedFile === file ? 'bg-[#1a1a1a]' : 'bg-[#252525]'} // Made selected file darker
                  hover:bg-[#303030] transition duration-150 ease-in-out text-[18px] pr-[25px] font-roboto`}
      onClick={() => handleFileClick(file)}
    >
      <FiFileText className="text-white mr-2" size="1.5em" /> 
      <span className="ml-4">{file}</span>
    </div>
  ))}
</div>




<div className="flex flex-1 flex-col">
  {renderTabs()}
  {selectedFile && (
    <div className="flex-1 bg-[#1b1b1b] text-white p-5 overflow-y-auto font-roboto text-lg leading-relaxed shadow-inner w-[1176px]">
      <pre className="whitespace-pre-wrap text-sm md:text-base lg:text-lg text-gray-200 text-[20px] justify-start">
        {fileContents[selectedFile]}
      </pre>
    </div>
  )}
</div>


    </div>
  );
};

export default TextEditor;
