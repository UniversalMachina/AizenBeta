import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextEditor from './TextEditor';





function UploadGraphics() {
  const [text, setText] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const [fileContents, setFileContents] = useState({});

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


  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-center pt-0 pb-[190.5px] pr-[119px] pl-20 box-border gap-[40px] min-h-[1080px] leading-[normal] tracking-[normal] mq700:gap-[20px] mq700:pr-[29px] mq700:box-border mq975:pl-10 mq975:pr-[59px] mq975:box-border">
  
  
  <div className="w-[1238px] h-[794px] absolute !m-[0] top-[-112px] left-[202px] flex items-center justify-center z-[0]">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.302)]"
          alt=""
          src="/logo.svg"
        />
      </div>
  
  
      {/* <form onSubmit={handleSubmit} className='z-[20]'>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here"
        ></textarea>
        <button type="submit">Convert to ZIP</button>
      </form> */}

  
  
  
  


      <section className="self-stretch rounded-3xl bg-gray-400 overflow-hidden flex flex-row items-center justify-start py-[58px] pr-0 pl-[26px] box-border max-w-full z-[1] text-center text-21xl text-solid-white font-league-spartan mq700:pt-[122px] mq700:pb-[122px] mq700:box-border">
      <div className="flex-1 flex flex-col items-center justify-center max-w-full">
        <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
          <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-5xl mq950:text-13xl">
            Project Name
          </h1>

          <TextEditor fileContents={fileContents}/>

        </div>


      </div>
    </section>
    <div className="w-[145px] rounded-101xl bg-blueviolet flex flex-col items-start justify-start py-4 pr-5 pl-6 box-border whitespace-nowrap text-white font-league-spartan">
    <a href={downloadLink} download="converted.zip" target="_blank" rel="noopener noreferrer" className="relative inline-block min-w-[97px] text-white font-bold no-underline">            Download ZIP
          </a>
        </div>
    </div>
  );
}

export default UploadGraphics;