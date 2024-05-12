import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  { id: 1, question: "What is the name of your SaaS product?" },
  { id: 2, question: "What primary problem does your SaaS product solve?" },
  { id: 3, question: "How does your product differentiate from existing solutions in the market?" },
  { id: 4, question: "Who is your target audience for this product?" },
  { id: 5, question: "What is the estimated size of your target market segment?" },
  { id: 6, question: "What specific demographics (e.g., industry, company size, roles) does your product cater to?" },
  { id: 7, question: "What are the main features of your SaaS product?" },
  { id: 8, question: "How do these features specifically benefit your target audience?" },
  { id: 9, question: "Can you provide a concise description of your company, highlighting its mission and core values?" },
  { id: 10, question: "What are the long-term goals of your company in the context of the market and customer base?" },
  { id: 11, question: "How do you envision your product evolving in the next five years?" },
  { id: 12, question: "What key metrics or indicators will you use to measure your product's success?" }
];



const Back = ({ questionId, handleNext, answer, setAnswer }) => {
  const question = questions[questionId - 1].question;

  useEffect(() => {
    setAnswer('');
  }, [questionId, setAnswer]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  const handleNextClick = () => {
    if (answer.trim() === '') {
      setAnswer('');
    }
    handleNext();
  };

  return (
    <section className="self-stretch rounded-3xl bg-gray-400 overflow-hidden flex flex-row items-center justify-start py-[188px] pr-0 pl-[26px] box-border max-w-full z-[1] text-center text-21xl text-solid-white font-league-spartan mq700:pt-[122px] mq700:pb-[122px] mq700:box-border">
      <div className="flex-1 flex flex-col items-center justify-center max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-5xl mq950:text-13xl">
            Project Name
          </h1>
          <h3 className="m-0 self-stretch relative text-5xl tracking-[-0.4px] leading-[39px] font-normal font-inherit text-gray-200 mix-blend-normal mq450:text-lgi mq450:leading-[31px]">
            {question}
          </h3>
        </div>
        <div className="w-full flex flex-row items-center justify-center py-[42px] px-0 box-border z-[1] mt-[-9px]">
          <div className="w-full max-w-[272px] rounded-101xl bg-gray-300 box-border flex flex-col items-start justify-center py-3.5 px-4 shrink-0 border-[1px] border-solid border-solid-white">
            <input
              className="w-full [border:none] [outline:none] font-league-spartan text-base bg-[transparent] h-[15px] relative text-solid-white text-left inline-block p-0"
              placeholder="AirBNB"
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
        <div className="w-[126px] h-[38px] flex flex-row items-center justify-center py-0 px-[22px] box-border z-[2] mt-[-9px]">
          <button onClick={handleNextClick} className="cursor-pointer [border:none] py-4 pr-5 pl-6 bg-blueviolet flex-1 rounded-101xl flex flex-col items-start justify-start hover:bg-mediumslateblue-100">
            <b className="relative text-base inline-block font-league-spartan text-solid-white text-left min-w-[34px]">
              Next
            </b>
          </button>
        </div>
      </div>
    </section>
  );
};
function QuestionPage({ questionId }) {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedAnswer = sessionStorage.getItem(`question${questionId}`);
    if (storedAnswer) setAnswer(storedAnswer);
  }, [questionId]);

  const handleNext = () => {
    sessionStorage.setItem(`question${questionId}`, answer);
    const nextPage = questionId < 12 ? `/question${questionId + 1}` : "/review";
    navigate(nextPage);
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
      <Back questionId={questionId} handleNext={handleNext} answer={answer} setAnswer={setAnswer}/>
      <img
        className="w-[84px] h-6 relative"
        loading="lazy"
        alt=""
        src="/frame-3.svg"
      />
    </div>
  );
}

export default QuestionPage;