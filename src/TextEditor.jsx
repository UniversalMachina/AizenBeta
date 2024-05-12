import React, { useState } from 'react';

const TextEditor = ({ fileContents }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
    setActiveTab(file);
  };

  const handleTabClick = (file) => {
    setActiveTab(file);
    setSelectedFile(file); // Also set selectedFile when tab is clicked
  };

  const renderTabs = () => {
    if (Object.keys(fileContents).length > 5) {
      return (
        <div className="flex bg-gray-800 p-2 overflow-x-auto">
          {Object.keys(fileContents).map((file) => (
            <div
              key={file}
              className={`p-2 mr-2 ${activeTab === file ? 'bg-gray-700' : 'bg-gray-800'} text-white cursor-pointer`}
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
    <div className="flex h-screen">
      <div className="w-50 bg-gray-900 p-2 overflow-y-auto">
        {Object.keys(fileContents).map((file) => (
          <div
            key={file}
            className={`p-2 ${selectedFile === file ? 'bg-gray-700' : ''} text-white cursor-pointer`}
            onClick={() => handleFileClick(file)}
          >
            {file}
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col">
        {renderTabs()}
        {selectedFile && (
          <div className="flex-1 bg-gray-900 text-white p-5 overflow-y-auto">
            <pre>{fileContents[selectedFile]}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextEditor;
