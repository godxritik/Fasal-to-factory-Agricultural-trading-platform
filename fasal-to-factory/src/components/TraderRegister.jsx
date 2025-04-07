// function TraderRegister() {
//     return (
//         <div id="TraderRegister" className=" flex flex-col items-center justify-center px-12 py-4 rounded-lg shadow-lg  bg-white border-b-4 border-t-4 border-[#EC5228] w-[350px] ">
//             <span className="text-[#EC5228] font-medium text-2xl  ">Fasal to Factory</span>
//             <h3 className="my-4 font-semibold">Create a Trader Account</h3>
//             <form action="#">
//                 <div >
//                     <label  htmlFor="fullname">Full name as per PAN </label><br />
//                     <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0  focus:shadow-[#EC5228] outline-none rounded-md text-md text-[#EC5228] transition-all duration-300 my-2" type="text" name="" id="fullname" placeholder="e.g. Ritik Gaur" required/>
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email </label><br />
//                     <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0  focus:shadow-[#EC5228] outline-none rounded-md text-md text-[#EC5228] transition-all duration-300 my-2" type="email" name="" id="email" placeholder="example@company.com" required/>
//                 </div>
//                 <div>
//                     <label htmlFor="pass">Create a password </label><br />
//                     <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0  focus:shadow-[#EC5228] outline-none rounded-md text-md text-[#EC5228] transition-all duration-300 my-2" type="password" name="" id="pass" placeholder="password here" required/>
//                 </div>
//                 <div>
//                     <label htmlFor="mobile">Mobile no. </label><br />
//                     <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0  focus:shadow-[#EC5228] outline-none rounded-md text-md text-[#EC5228] transition-all duration-300 my-2" type="text" id="mobile" maxlength="10" placeholder="don't include +91" required />
//                 </div>
//                 <div>
//                     <label htmlFor="PAN">Enter PAN </label><br />
//                     <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0  focus:shadow-[#EC5228] outline-none rounded-md text-md text-[#EC5228] transition-all duration-300 my-2" type="text" id="PAN" placeholder="enter valid PAN number" required />
//                 </div>
//                 <div>
//                     <label htmlFor="GST">GST number (optional) </label><br />
//                     <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0  focus:shadow-[#EC5228] outline-none rounded-md text-md text-[#EC5228] transition-all duration-300 my-2" type="text" id="GST" placeholder="ex: 08 ABCDE9999F1Z8" required />
//                 </div>

//                 <button className="border-2 border-[#EC5228] w-[240px] py-2 text-[#EC5228] font-medium hover:bg-[#EC5228] hover:text-white rounded-md transition-all duration-300 my-4" type="submit">Register me</button>
//             </form>
//         </div>

//     )
// }

// export default TraderRegister;



import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SuccessMessage from "./SuccessMessage";
// import AlreadyRegisteredMessage from "./AlreadyRegisteredMessage";
import ErrorMessage from "./ErrorMessage"


function TraderRegister() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        pass: "",
        mobile: "",
        PAN: "",
        GST: ""
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const [emailAlreadyRegistered, setEmailAlreadyRegistered] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const dataToSend = { ...formData, fullname: formData.fullname.toLowerCase() };

            const response = await fetch("http://localhost:5000/register-trader", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend),
            });

            const result = await response.json();
            if (response.ok) {
                setShowSuccess(true);
                // // Reset form
                // setFormData({
                //     fullname: "",
                //     email: "",
                //     pass: "",
                //     mobile: "",
                //     PAN: "",
                // });
                // Hide success message after 5 seconds
                setTimeout(() => setShowSuccess(false), 5000);
            } else if (response.status == 400) {
                setEmailAlreadyRegistered(true);
                setTimeout(() => setEmailAlreadyRegistered(false), 5000);

            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="w-full  ">
            <Navbar />
            <div className="flex flex-col items-center justify-center py-1">
                <div id="TraderRegister" className="flex flex-col items-center justify-center px-12 py-4 rounded-lg shadow-lg bg-white border-b-4 border-t-4 border-[#EC5228] w-[350px]">
                    <span className="text-[#EC5228] font-medium text-2xl">Fasal to Factory</span>
                    <h3 className="my-4 font-semibold">Create a Trader Account</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="fullname">Full name as per PAN </label><br />
                            <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0 focus:shadow-[#EC5228] outline-none rounded-md text-md text-[#EC5228] transition-all duration-300 my-2" type="text" id="fullname" placeholder="e.g. Ritik Gaur" required onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email </label><br />
                            <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0 focus:shadow-[#EC5228] outline-none rounded-md text-md text-[#EC5228] transition-all duration-300 my-2" type="email" id="email" placeholder="example@company.com" required onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="pass">Create a password </label><br />
                            <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0 focus:shadow-[#EC5228] outline-none rounded-md text-md text-[#EC5228] transition-all duration-300 my-2" type="password" id="pass" placeholder="password here" required onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="mobile">Mobile no. </label><br />
                            <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0 focus:shadow-[#EC5228] outline-none rounded-md text-md text-[#EC5228] transition-all duration-300 my-2" type="text" id="mobile" maxLength="10" placeholder="don't include +91" required onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="PAN">Enter PAN </label><br />
                            <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0 focus:shadow-[#EC5228] outline-none rounded-md text-md text-[#EC5228] transition-all duration-300 my-2" type="text" id="PAN" placeholder="enter valid PAN number" required onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="GST">GST number (optional) </label><br />
                            <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0 focus:shadow-[#EC5228] outline-none rounded-md text-md text-[#EC5228] transition-all duration-300 my-2" type="text" id="GST" placeholder="ex: 08 ABCDE9999F1Z8"  onChange={handleChange} />
                        </div>
                        <button className="border-2 border-[#EC5228] w-[240px] py-2 text-[#EC5228] font-medium hover:bg-[#EC5228] hover:text-white rounded-md transition-all duration-300 my-4" type="submit">Register me</button>
                    </form>
                </div>
            </div>

                {/* Status Messages */}

            <SuccessMessage title={"Success :)"} message={"Trader Account created"} show={showSuccess} />
            {/* <AlreadyRegisteredMessage show={emailAlreadyRegistered} /> */}
            <ErrorMessage title={"Failed!!"} message={"Email already registered"} show={emailAlreadyRegistered}/>

        </div>


    );
}

export default TraderRegister;
