import React from 'react';

function Loader () {
  return (
    <div className="
      absolute 
      w-[2.5em] h-[2.5em] 
      top-[calc(50%-1.25em)] left-[calc(50%-1.25em)]
      rotate-[165deg]
    ">
      <div className="
        absolute 
        top-1/2 left-1/2 
        w-[0.5em] h-[0.5em] 
        rounded-[0.25em]
        -translate-x-1/2 -translate-y-1/2
        animate-loader-before
      "></div>
      <div className="
        absolute 
        top-1/2 left-1/2 
        w-[0.5em] h-[0.5em] 
        rounded-[0.25em]
        -translate-x-1/2 -translate-y-1/2
        animate-loader-after
      "></div>
    </div>
  );
};

export default Loader;