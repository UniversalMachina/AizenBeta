import React from 'react';

const LoadingAnimation = () => {
  return (
    <div>
      <section className="w-[1721px] h-[140px] rounded-3xl flex flex-row items-center justify-center px-[20px]">
        {[
          'bg-purple-500',
          'bg-purple-600',
          'bg-purple-700',
          'bg-purple-400',
          'bg-purple-300',
          'bg-purple-200',
          ...Array(9).fill('bg-white'),
        ].map((color, index) => (
          <div
            key={index}
            className={`h-[81px] w-[82px] relative rounded-[50%] ${color} animate-bounce`}
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </section>
    </div>
  );
};

export default LoadingAnimation;