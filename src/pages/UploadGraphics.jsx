import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';





function UploadGraphics({onSignOut}) {

  const location = useLocation();
  const navigate = useNavigate();

  const { data } = location.state || { data: 'No data received' }; // Extracting data passed via state

  const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    if (data) {
      setDownloadLink(data.downloadLink);
    }
  }, [data]);

  const handleSignOut = () => {
    onSignOut(); // Call the sign-out logic
    navigate('/login'); // Redirect to the login page
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
  
  
  
  
  


      <section className="self-stretch rounded-3xl bg-gray-400 overflow-hidden flex flex-row items-center justify-start py-[280px] pr-0 pl-[26px] box-border max-w-full z-[1] text-center text-21xl text-solid-white font-league-spartan mq700:pt-[122px] mq700:pb-[122px] mq700:box-border">

    </section>

<div className='flex flex-row gap-[30px]'>

    <div className="w-[145px] rounded-101xl bg-blueviolet hover:bg-purple-400 flex flex-col items-start justify-start py-4 pr-5 pl-6 box-border whitespace-nowrap text-white font-league-spartan">
    <a href={downloadLink} download="converted.zip" target="_blank" rel="noopener noreferrer" className="relative inline-block min-w-[97px] text-white font-bold no-underline">            Download ZIP
          </a>
        </div>

        <button 
  className="w-[145px] rounded-101xl bg-blueviolet flex flex-col items-start justify-start py-4 pr-5 pl-6 box-border whitespace-nowrap text-white font-league-spartan text-[16px] transition duration-300 ease-in-out hover:bg-purple-400"
  onClick={handleSignOut}
  style={{ cursor: 'pointer', border: 'none' }}
>
  <div className="relative inline-block min-w-[97px] text-white font-bold">
    Sign Out
  </div>
</button>



  </div>


    </div>
  );
}

export default UploadGraphics;