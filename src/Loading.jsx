import React from "react";
import LoadingAnimation from "./LoadingAnimation";

function Loading() {
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
        Project Name
      </div>
      <section className="self-stretch rounded-3xl bg-gray-400 flex flex-row items-center justify-start py-[188px] pr-0 pl-[26px] box-border max-w-full z-[1] text-center text-21xl text-solid-white font-league-spartan mq700:pt-[122px] mq700:pb-[122px] mq700:box-border">
  <LoadingAnimation />
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