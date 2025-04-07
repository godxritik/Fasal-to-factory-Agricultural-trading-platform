import successSound from "../assets/sounds/successSound.mp3"
import { useEffect } from "react";
function SuccessMessage({title,message,show}) {

    useEffect(() => {
        if (show) {
            const audio = new Audio(successSound);
            audio.play();
        }
    }, [show]); 

    return (
        /* From Uiverse.io by hoshikawamaki */
        <div className={`fixed bottom-5 right-0 z-50 flex w-3/4 max-w-96 h-24 bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 ease-out ${show ? 'translate-x-0' : 'translate-x-full'}`}>
            <svg width="16" height="96" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M 8 0 
                       Q 4 4.8, 8 9.6 
                       T 8 19.2 
                       Q 4 24, 8 28.8 
                       T 8 38.4 
                       Q 4 43.2, 8 48 
                       T 8 57.6 
                       Q 4 62.4, 8 67.2 
                       T 8 76.8 
                       Q 4 81.6, 8 86.4 
                       T 8 96 
                       L 0 96 
                       L 0 0 
                       Z"
                    fill="#3F7D58"
                    stroke="#3F7D58"
                    strokeWidth="2"
                    strokeLinecap="round"
                ></path>
            </svg>
            <div className="mx-2.5 overflow-hidden w-full">
                <p className="mt-1.5 text-xl font-bold text-[#3F7D58] leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
                    {title}
                </p>
                <p className="overflow-hidden leading-5 break-all text-zinc-500 max-h-10">
                    {message}
                </p>
            </div>
            <button className="w-16 cursor-pointer focus:outline-none">
                <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="mediumseagreen"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    ></path>
                </svg>
            </button>
        </div>
    );
};

export default SuccessMessage;