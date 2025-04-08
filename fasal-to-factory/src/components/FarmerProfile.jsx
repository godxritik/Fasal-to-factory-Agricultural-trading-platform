import React, { useEffect, useState } from "react";
import avatarIcon from "../assets/images/person.svg";
import closeIconWhite from "../assets/images/closeIcon-white.svg";
import axios from "axios";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import SpotlightCard from "./animations/SpotlightCard";

function FarmerProfile({ userId, profileStatus, handleProfileToggle }) {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        userId: "",
        nickname: "",
        dob: "",
        gender: "",
        city: "",
        address: "",
        profilePhoto: "",
    });

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:5000/farmer/${userId}`)
                .then(res => {
                    const data = res.data;
                    setFormData({
                        fullname: data.fullname || "",
                        email: data.email || "",
                        userId: data.userId || "",
                        nickname: data.nickname || "",
                        dob: data.dob || "",
                        gender: data.gender || "",
                        city: data.city || "",
                        address: data.address || "",
                        profilePhoto: data.profilePhoto || "",
                    });
                })
                .catch(err => console.error(err));
        }
    }, [userId]);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedData = { ...formData };

        if (selectedFile) {
            const base64 = await convertToBase64(selectedFile);
            updatedData.profilePhoto = base64;
        }

        try {
            const res = await axios.put(`http://localhost:5000/farmer/${userId}`, updatedData);
            setFormData(res.data.farmer);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 2000);
        } catch (err) {
            console.error(err);
            setShowError(true);
            setTimeout(() => setShowError(false), 2000);
        }
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    return (

        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 ${profileStatus ? "scale-1" : "-scale-0"} transition-all duration-100 h-auto`}>


            <SpotlightCard className="custom-spotlight-card     " spotlightColor="#14532d">

                <div className={`bg-transparent rounded-lg p-2 sm:p-8 md:p-10 w-full  flex flex-wrap justify-around items-center space-y-4 md:space-y-0 gap-4 sm:gap-12  relative  ${profileStatus ? "scale-1" : "-scale-0"} transition-all duration-500 overflow-y-auto max-h-[90vh] no-scrollbar overflow-hidden  `}>

                    {/* <button onClick={handleProfileToggle} className='absolute top-10 right-8 md:top-5 md:right-5'> */}
                    <button onClick={handleProfileToggle} className='absolute top-4 right-4 md:top-5 md:right-5 z-10'>

                        <img src={closeIconWhite} alt="close" />
                    </button>

                    {/* Avatar and Info */}
                    <div className="px-4 py-6 md:px-12 flex flex-col items-center  border border-[#fff] rounded-lg">
                        <img
                            src={formData.profilePhoto || avatarIcon}
                            alt="avatar"
                            className="w-[150px] h-[150px] object-cover border border-white p-1 mb-4 rounded-full"
                        />

                        <h3 className="text-xl font-bold text-white">{formData.fullname ? formData.fullname.toUpperCase() : "Your Name"}</h3>
                        <p className='text-sm text-white'>{formData.userId || "Farmer ID"}</p>
                        <p className="text-sm text-white">{formData.email || "Your Email"}</p>

                        <label className="text-[#fff] my-4 px-4 py-2 rounded-lg border-2 border-white hover:bg-[#fff] hover:text-[#3f7d58] transition-all duration-300" htmlFor="edit-profilePic">Update Avatar</label>
                        <input id="edit-profilePic" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                    </div>

                    {/* Form Section */}
                    <form className="w-full md:w-[400px]  " onSubmit={handleSubmit}>
                        <div>
                            <label className='font-semibold text-sm text-[#fff]' htmlFor="nickname">Your Nickname</label><br />
                            <input className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white bg-opacity-20" type="text" id="nickname" value={formData.nickname || ""} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="dob" className="font-semibold text-sm text-[#fff] block mb-1">Date of Birth</label>
                            <input className="border border-slate-400 rounded-lg px-3 py-1 mb-4 text-sm w-full focus:border-none focus:ring-2 focus:ring-none text-[#fff] bg-white bg-opacity-20 chage-calendar-icon" type="date" id="dob" value={formData.dob || ""} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="gender" className="font-semibold text-sm text-[#fff] block mb-1">Gender</label>
                            <select className="border border-slate-400 rounded-lg px-3 py-1 mb-2 text-sm w-full focus:border-[#3F7D58] focus:ring focus:ring-[#3F7D58] text-[#fff] bg-white bg-opacity-20" id="gender" value={formData.gender || ""} onChange={handleChange}>
                                <option className='text-[#3F7D58] bg-white' value="">Select</option>
                                <option className='text-[#3F7D58] bg-white' value="male">Male</option>
                                <option className='text-[#3F7D58] bg-white' value="female">Female</option>
                                <option className='text-[#3F7D58] bg-white' value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className='font-semibold text-sm text-[#fff]' htmlFor="city">City</label><br />
                            <input className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white bg-opacity-20" type="text" id="city" value={formData.city || ""} onChange={handleChange} />
                        </div>

                        <div>
                            <label className='font-semibold text-sm text-[#fff]' htmlFor="address">Address</label><br />
                            <textarea className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white bg-opacity-20" id="address" rows={4} value={formData.address || ""} onChange={handleChange} />
                        </div>

                        <button className="w-full px-4 py-2 text-[#fff] border-2 border-[#fff] font-medium hover:bg-[#fff] hover:text-[#3f7d58] rounded-md transition-all duration-300 mt-2" type="submit">
                            Save
                        </button>
                    </form>
                </div>
            </SpotlightCard>


            <SuccessMessage title={"Success :)"} message={"All changes saved!"} show={showSuccess} />
            <ErrorMessage title={"Profile update failed!!"} message={"Cannot save changes"} show={showError} />

        </div>


    );
}

export default FarmerProfile;
