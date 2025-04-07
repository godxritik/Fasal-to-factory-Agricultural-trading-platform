
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FarmerLogin from "./FarmerLogin";
import TraderLogin from "./TraderLogin";
import Navbar from "./Navbar";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

function LoginHandler() {
    // const [farmerLoginStatus, setFarmerLoginStatus] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("farmer");
    const navigate = useNavigate();

    const [loginSuccessStatus , setLoginSuccessStatus] = useState(false);
    const [loginErrorStatus, setLoginErrorStatus] = useState(false);
    // let showError = false;
 

    const handleLogin = async () => {

        try {
            const response = await axios.post("http://localhost:5000/login", { email, password, role });

            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userId", response.data.userId);

                // showing my custom success popup
                setLoginSuccessStatus(true);
                setTimeout(() => (setLoginSuccessStatus(false)), 2000);

                if (role === "farmer") {
                   setTimeout(() => {
                    navigate("/farmer-dashboard");
                   }, 2000);
                } else {
                    setTimeout(() => {
                        navigate("/trader-dashboard");
                       }, 2000);
                }
            }
        } catch (error) {
            // alert("Login failed:", error.response?.data?.message || "Server Error");
            // showing my custom error popup
            setLoginErrorStatus(true);
            setTimeout(() => (setLoginErrorStatus(false)), 2000);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="w-full flex justify-center items-center py-24 max-h-screen">
                <div className={`w-[350px] border-b-4 border-t-4 ${role === "trader" ? 'border-[#EC5228]' : 'border-[#3F7D58]'} rounded-lg shadow-xl `}>
                    <div className="w-[350px]">
                        <button onClick={() => setRole("farmer")} className={`w-[50%] py-1 ${role === "farmer" ? "bg-[#3F7D58] text-white" : "text-[#aaaaa9]"}`}>Farmer</button>
                        <button onClick={() => setRole("trader")} className={`w-[50%] py-1 ${role === "trader" ? "bg-[#EC5228] text-white" : "text-[#aaaaa9]"}`}>Trader</button>
                    </div>

                    {role === "farmer" ? (
                        <FarmerLogin setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin} />
                    ) : (
                        <TraderLogin setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin} />
                    )}
                </div>
            </div>

            <SuccessMessage title={"Success :)"} message={"Login complete"} show={loginSuccessStatus}  />
            <ErrorMessage title={"Failed !"} message={"email or password mismatch"} show={loginErrorStatus} />

        </div>
    );
}

export default LoginHandler;
