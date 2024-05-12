import React, { useState } from 'react';
import axios from 'axios';
import TextEditor from './TextEditor';

function Upload() {
  const [text, setText] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const [fileContents, setFileContents] = useState({});
  const [selectedFile, setSelectedFile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjusted to send text properly and expecting the adjusted response structure
      const response = await axios.post('http://localhost:5000/process-text', { text: text });
      setDownloadLink(response.data.downloadLink);
      setFileContents(response.data.fileContents);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  return (
    <div>
      <h1>Text to ZIP Converter</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here"
        ></textarea>
        <button type="submit">Convert to ZIP</button>
      </form>
      {downloadLink && (
        <div>
          <h2>Download Link:</h2>
          <a href={downloadLink} download="converted.zip" target="_blank" rel="noopener noreferrer">
            Download ZIP
          </a>
        </div>
      )}
      <div>
        <h2>File Contents:</h2>
        {/* {Object.keys(fileContents).map((file) => (
          <button key={file} onClick={() => handleFileClick(file)}>
            {file}
          </button>
        ))}
        {selectedFile && <pre>{fileContents[selectedFile]}</pre>} */}
      
      <TextEditor fileContents={fileContents}/>
      </div>
    </div>
  );
}

export default Upload;
