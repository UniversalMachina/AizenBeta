import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import io from 'socket.io-client';
import LoadingAnimation from "./LoadingAnimation";


function Loading() {
  const [loadingStatus, setLoadingStatus] = useState('');
  const [processedData, setProcessedData] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const startLoading = async () => {
        try {
            setLoadingStatus('Data submitted, waiting for response...');
            
            // Send data via POST request
            const response = await fetch('http://AizenTestLaunch-env.eba-cp72myue.us-east-1.elasticbeanstalk.com/start_loading', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    questions: {
                        "1": sessionStorage.getItem('question1'),
                        "2": sessionStorage.getItem('question2'),
                        "3": sessionStorage.getItem('question3'),
                        "4": sessionStorage.getItem('question4'),
                        "5": sessionStorage.getItem('question5'),
                        "6": sessionStorage.getItem('question6'),
                        "7": sessionStorage.getItem('question7'),
                        "8": sessionStorage.getItem('question8'),
                        "9": sessionStorage.getItem('question9'),
                        "10": sessionStorage.getItem('question10'),
                        "11": sessionStorage.getItem('question11'),
                        "12": sessionStorage.getItem('question12')
                    }
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Start polling for status
            const pollStatus = setInterval(async () => {
                const statusResponse = await fetch('http://AizenTestLaunch-env.eba-cp72myue.us-east-1.elasticbeanstalk.com/check_status');
                const statusData = await statusResponse.json();
                setLoadingStatus(statusData.status);

                if (statusData.status === 'Complete' && statusData.complete) {
                    clearInterval(pollStatus);
                    console.log(statusData.complete.message); // Logging the message from the backend
                    setProcessedData(statusData.complete.data); // Storing the data from the backend
                    setIsComplete(true);
                }
            }, 2000); // Poll every 2 seconds
        } catch (error) {
            console.error('Error:', error);
        }
    };

    startLoading();
}, []);




  useEffect(() => {
    if (isComplete) {
      navigate("/upload", { state: { data: processedData } }); // Passing data through navigate
    }
  }, [isComplete, navigate, processedData]);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-center pt-0 pb-[190.5px] pr-[119px] pl-20 box-border gap-[40px] min-h-[1080px] leading-[normal] tracking-[normal] mq700:gap-[20px] mq700:pr-[29px] mq700:box-border mq975:pl-10 mq975:pr-[59px] mq975:box-border">
      <div className="w-[1238px] h-[794px] absolute !m-[0] top-[-112px] left-[202px] flex items-center justify-center z-[0]">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.302)]"
          alt=""
          src="/logo.svg"
        />
      </div>
      <div className="m-0 self-stretch relative font-bold text-center text-[40px] text-solid-white font-league-spartan">
        {!isComplete ? loadingStatus : 'Complete!'}
      </div>
      <section className="self-stretch rounded-3xl bg-gray-400 flex flex-row items-center justify-start py-[188px] pr-0 pl-[26px] box-border max-w-full z-[1] text-center text-21xl text-solid-white font-league-spartan mq700:pt-[122px] mq700:pb-[122px] mq700:box-border">
        {!isComplete ? (
          <>
            <LoadingAnimation />
            {/* <button onClick={startLoading} disabled={loadingStatus !== ''}>Start Loading</button> */}
          </>
        ) : null}
      </section>
      <img
        className="w-[84px] h-6 relative"
        loading="lazy"
        alt=""
        src="/frame-3.svg"
      />
    </div>
  );
}

export default Loading;