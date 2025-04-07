import { useState } from "react";
import Navbar from "./Navbar";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";

function FarmerRegister() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        pass: "",
        mobile: "",
        PAN: "",
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const [emailAlreadyRegistered, setEmailAlreadyRegistered] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === "mobile") {
            // Only allow numbers and limit to 10 digits
            const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
            setFormData({ ...formData, [id]: digitsOnly });
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = {
                ...formData,
                fullname: formData.fullname.toLowerCase()
            };

            const response = await fetch("http://localhost:5000/register-farmer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend),
            });

            const result = await response.json();

            if (response.ok) {
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 2000);
                setTimeout(() => { navigate("/login");}, 2000);
            } else if (response.status === 400) {
                setEmailAlreadyRegistered(true);
                setTimeout(() => setEmailAlreadyRegistered(false), 2000);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="w-full">
            <Navbar />
            <div className="flex flex-col items-center justify-center py-8">
                <div id="FarmerRegister" className="flex flex-col items-center justify-center px-12 py-4 rounded-lg shadow-xl bg-white border-b-4 border-t-4 border-[#3F7D58] w-[350px]">
                    <span className="text-[#3F7D58] font-medium text-2xl">Fasal to Factory</span>
                    <h3 className="my-4 font-semibold">Create a Farmer Account</h3>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="fullname">Full name as per PAN</label><br />
                            <input
                                onChange={handleChange}
                                value={formData.fullname}
                                className="w-[240px] px-2 py-1 border border-slate-400 outline-none rounded-md text-md text-[#3F7D58] transition-all duration-300 my-2"
                                type="text"
                                id="fullname"
                                placeholder="e.g. Ritik Gaur"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label><br />
                            <input
                                onChange={handleChange}
                                value={formData.email}
                                className="w-[240px] px-2 py-1 border border-slate-400 outline-none rounded-md text-md text-[#3F7D58] transition-all duration-300 my-2"
                                type="email"
                                id="email"
                                placeholder="example@company.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="pass">Create a password</label><br />
                            <input
                                onChange={handleChange}
                                value={formData.pass}
                                className="w-[240px] px-2 py-1 border border-slate-400 outline-none rounded-md text-md text-[#3F7D58] transition-all duration-300 my-2"
                                type="password"
                                id="pass"
                                placeholder="password here"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="mobile">Mobile no.</label><br />
                            <input
                                onChange={handleChange}
                                value={formData.mobile}
                                className="w-[240px] px-2 py-1 border border-slate-400 outline-none rounded-md text-md text-[#3F7D58] transition-all duration-300 my-2"
                                type="tel"
                                id="mobile"
                                placeholder="10 digit number"
                                pattern="[0-9]{10}"
                                maxLength="10"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="PAN">Enter PAN</label><br />
                            <input
                                onChange={handleChange}
                                value={formData.PAN}
                                className="w-[240px] px-2 py-1 border border-slate-400 outline-none rounded-md text-md text-[#3F7D58] transition-all duration-300 my-2"
                                type="text"
                                id="PAN"
                                placeholder="enter valid PAN number"
                                required
                            />
                        </div>

                        <button
                            className="border-2 border-[#3F7D58] w-[240px] py-2 text-[#3F7D58] font-medium hover:bg-[#3F7D58] hover:text-white rounded-md transition-all duration-300 my-4"
                            type="submit"
                        >
                            Register me
                        </button>
                    </form>
                </div>
            </div>

            <SuccessMessage
                title={"Success :)"}
                message={"Farmer account Created !"}
                show={showSuccess}
            />

            <ErrorMessage
                title={"Failed!!"}
                message={"Email already registered"}
                show={emailAlreadyRegistered}
            />
        </div>
    );
}

export default FarmerRegister;