import { useEffect } from "react";
import failedSound from "../assets/sounds/failedSound.mp3"
function ErrorMesssage({ title, message, show }) {

    useEffect(() => {
        if (show) {
            const audio = new Audio(failedSound);
            audio.play();
        }

    },[show])

    return (
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
                    fill="red"
                    stroke="red"
                    strokeWidth="2"
                    strokeLinecap="round"
                ></path>
            </svg>
            <div className="mx-2.5 overflow-hidden w-full">
                <p className="mt-1.5 text-xl font-bold text-red-500 leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
                    {title}
                </p>
                <p className="overflow-hidden leading-5 break-all text-zinc-500 max-h-10">
                    {message}
                </p>
            </div>
            <button className="w-16 cursor-pointer focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"  // Increased from 16 to make icon larger
                    height="24" // Increased from 16 to make icon larger
                    fill="red"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
                        stroke="red"          // Added stroke color
                        strokeWidth="0.5"     // Added stroke width
                        strokeLinecap="round" // Makes stroke ends rounded
                    />
                </svg>
            </button>
        </div>

    )
}

export default ErrorMesssage;