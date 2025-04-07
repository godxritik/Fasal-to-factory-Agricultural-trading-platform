// import React from 'react';
// import avatarIcon from "../assets/images/person.svg"
// import closeIcon from "../assets/images/closeIcon.svg"

// function FarmerProfile({profileStatus,handleProfileToggle}) {
//     return (
//         <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-50 ${profileStatus ? "scale-1" : "-scale-0"}  transition-all duration-100 `}>

//             <div className={`bg-white rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-4xl flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-6 mx-8 my-4 relative ${profileStatus ? "scale-1" : "-scale-0"}  transition-all duration-500 `}>

//             <button onClick={handleProfileToggle} className='absolute top-10 right-8 md:top-5 md:right-5'><img src={closeIcon} alt="" /></button>

//                 {/* Avatar and Info */}
//                 <div className="p-4 flex flex-col items-center justify-center md:items-start md:text-left">
//                     <img
//                         src={avatarIcon}
//                         alt="avatar"
//                         className="w-[120px] border-2 border-black object-cover mb-4 rounded-full p-1"
//                     />
//                     <h3 className="text-xl font-bold text-[#3F7D58]">Your Name</h3>
//                     <p className='text-sm text-[#3F7D58]'>Farmer ID</p>
//                     <p className="text-sm text-[#3F7D58]">Your Email</p>
//                 </div>

//                 {/* Form Section */}
//                 <div className="w-full max-w-sm">
//                     <div className=''>
//                         <label className='font-semibold text-sm text-[#3F7D58]' htmlFor="nickname">Your Nickname</label><br />
//                         <input
//                             className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#3F7D58] transition-all duration-300 my-2 focus:border-[#3F7D58] "
//                             type="text"
//                             id="nickname"
//                             placeholder="e.g. godxritik"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="dob" className="font-semibold text-sm text-[#3F7D58] block mb-1">
//                             Date of Birth
//                         </label>
//                         <input
//                             className="border rounded-lg px-3 py-1 mb-4 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-[#3F7D58]"
//                             type="date"
//                             id="dob"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="gender" className="font-semibold text-sm text-[#3F7D58] block mb-1 ">
//                             Gender
//                         </label>
//                         <select
//                             className="border rounded-lg px-3 py-1 mb-2 text-sm w-full focus:border-[#3F7D58] focus:ring focus:ring-[#3F7D58] text-[#3F7D58]"
//                             id="gender"
//                         >
//                             <option className='text-white bg-[#3F7D58]' value="male">Male</option>
//                             <option className='text-white bg-[#3F7D58]'  value="female">Female</option>
//                             <option className='text-white bg-[#3F7D58]'  value="other">Other</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label className='font-semibold text-sm text-[#3F7D58]' htmlFor="farmer-city">City</label><br />
//                         <input
//                             className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#3F7D58] transition-all duration-300 my-2 focus:border-[#3F7D58]"
//                             type="text"
//                             id="farmer-city"
//                             placeholder="city name"
//                         />
//                     </div>

//                     <div>
//                         <label className='font-semibold text-sm text-[#3F7D58]' htmlFor="farmer-address">Address</label><br />
//                         <textarea
//                             className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#3F7D58] transition-all duration-300 my-2 focus:border-[#3F7D58] "
//                             type="text"
//                             id="farmer-address"
//                             placeholder="postal address here"
//                         />
//                     </div>

//                     <button
//                         className="w-full px-4 py-2 text-[#3F7D58] border-2 border-[#3F7D58] font-medium hover:bg-[#3F7D58] hover:text-white rounded-md transition-all duration-300 my-4"
//                         type="submit"
//                     >
//                         Save
//                     </button>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FarmerProfile;


// import React, { useEffect, useState } from "react";
// import avatarIcon from "../assets/images/person.svg";
// import closeIcon from "../assets/images/closeIcon.svg";
// import axios from "axios";
// import SuccessMessage from "./SuccessMessage";
// import ErrorMessage from "./ErrorMessage";

// function FarmerProfile({ userId, profileStatus, handleProfileToggle }) {

//     const [showSuccess, setShowSuccess] = useState(false);
//     const [showError, setShowError] = useState(false);


//     const [formData, setFormData] = useState({
//         fullname: "",
//         email: "",
//         userId: "",
//         nickname: "",
//         dob: "",
//         gender: "",
//         city: "",
//         address: "",
//         profilePhoto: "",
//     });

//     useEffect(() => {
//         if (userId) {
//             axios.get(`http://localhost:5000/farmer/${userId}`)
//                 .then(res => {
//                     const data = res.data;
//                     setFormData({
//                         fullname: data.fullname || "",
//                         email: data.email || "",
//                         userId: data.userId || "",
//                         nickname: data.nickname || "",
//                         dob: data.dob || "",
//                         gender: data.gender || "",
//                         city: data.city || "",
//                         address: data.address || "",
//                         profilePhoto: data.profilePhoto || ""
//                     });
//                 })

//                 .catch(err => console.error(err));
//         }
//     }, [userId]);

//     const handleChange = (e) => {
//         setFormData(prev => ({
//             ...prev,
//             [e.target.id]: e.target.value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.put(`http://localhost:5000/farmer/${userId}`, formData);
//             setFormData(res.data.farmer);
//             // alert("Profile updated successfully");
//             setShowSuccess(true);
//             setTimeout(() => setShowSuccess(false), 2000);
//         } catch (err) {
//             console.error(err);
//             // alert("Failed to update profile");
//             setShowError(true);
//             setTimeout(() => setShowError(false), 2000);
//         }
//     };

//     return (
//         <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-50 ${profileStatus ? "scale-1" : "-scale-0"}  transition-all duration-100`}>
//             <div className={`bg-white rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-4xl flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-10 mx-8 my-4 relative ${profileStatus ? "scale-1" : "-scale-0"}  transition-all duration-500`}>

//                 <button onClick={handleProfileToggle} className='absolute top-10 right-8 md:top-5 md:right-5'>
//                     <img src={closeIcon} alt="close" />
//                 </button>

//                 {/* Avatar and Info */}
//                 <div className="px-4 py-6 w-full flex flex-col md:items-center md:text-left border border-[#3F7D58] rounded-lg">
//                     <img
//                         src={formData.profilePhoto || avatarIcon}
//                         alt="avatar"
//                         className="w-[120px] border-2 border-black object-cover mb-4 rounded-full p-1"
//                     />

//                     {/* <h3 className="text-xl font-bold text-[#3F7D58]">
//                         {formData.fullname
//                             ? formData.fullname
//                                 .split(" ")
//                                 .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//                                 .join(" ")
//                             : "Your Name"}
//                     </h3> */}
//                     <h3 className="text-xl font-bold text-[#3F7D58]">{formData.fullname ? formData.fullname.toLocaleUpperCase() :  "Your Name"}</h3>
//                     <p className='text-sm text-[#3F7D58]'>{formData.userId || "Farmer ID"}</p>
//                     <p className="text-sm text-[#3F7D58]">{formData.email || "Your Email"}</p>

//                     <label className="text-[#3F7D58] my-4 px-4 py-2 rounded-lg border-2 border-[#3F7D58] hover:bg-[#3F7D58] hover:text-white transition-all duration-300 " htmlFor="edit-profilePic">Update Avatar</label>
//                     <input id="edit-profilePic" type="file" className="hidden"  />

//                 </div>

//                 {/* Form Section */}
//                 <form className="w-full max-w-sm" onSubmit={handleSubmit}>
//                     <div>
//                         <label className='font-semibold text-sm text-[#3F7D58]' htmlFor="nickname">Your Nickname</label><br />
//                         <input
//                             className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#3F7D58] transition-all duration-300 my-2 focus:border-[#3F7D58]"
//                             type="text"
//                             id="nickname"
//                             value={formData.nickname || ""}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="dob" className="font-semibold text-sm text-[#3F7D58] block mb-1">
//                             Date of Birth
//                         </label>
//                         <input
//                             className="border rounded-lg px-3 py-1 mb-4 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-[#3F7D58]"
//                             type="date"
//                             id="dob"
//                             value={formData.dob || ""}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="gender" className="font-semibold text-sm text-[#3F7D58] block mb-1">
//                             Gender
//                         </label>
//                         <select
//                             className="border rounded-lg px-3 py-1 mb-2 text-sm w-full focus:border-[#3F7D58] focus:ring focus:ring-[#3F7D58] text-[#3F7D58]"
//                             id="gender"
//                             value={formData.gender || ""}
//                             onChange={handleChange}
//                         >
//                             <option className='text-white bg-[#3F7D58]' value="">Select</option>
//                             <option className='text-white bg-[#3F7D58]' value="male">Male</option>
//                             <option className='text-white bg-[#3F7D58]' value="female">Female</option>
//                             <option className='text-white bg-[#3F7D58]' value="other">Other</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label className='font-semibold text-sm text-[#3F7D58]' htmlFor="city">City</label><br />
//                         <input
//                             className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#3F7D58] transition-all duration-300 my-2 focus:border-[#3F7D58]"
//                             type="text"
//                             id="city"
//                             value={formData.city || ""}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div>
//                         <label className='font-semibold text-sm text-[#3F7D58]' htmlFor="address">Address</label><br />
//                         <textarea
//                             className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#3F7D58] transition-all duration-300 my-2 focus:border-[#3F7D58]"
//                             id="address"
//                             value={formData.address || ""}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <button
//                         className="w-full px-4 py-2 text-[#3F7D58] border-2 border-[#3F7D58] font-medium hover:bg-[#3F7D58] hover:text-white rounded-md transition-all duration-300 my-4"
//                         type="submit"
//                     >
//                         Save
//                     </button>
//                 </form>
//             </div>

//             {/* Success and Error Messages */}
//             <SuccessMessage
//                 title={"Success :)"}
//                 message={"All changes saved!"}
//                 show={showSuccess}
//             />

//             <ErrorMessage
//                 title={"Profile update failed!!"}
//                 message={"cannot save changes"}
//                 show={showError}
//             />

//         </div>
//     );
// }

// export default FarmerProfile;


// import React, { useEffect, useState } from "react";
// import avatarIcon from "../assets/images/person.svg";
// import closeIcon from "../assets/images/closeIcon.svg";
// import axios from "axios";
// import SuccessMessage from "./SuccessMessage";
// import ErrorMessage from "./ErrorMessage";

// function FarmerProfile({ userId, profileStatus, handleProfileToggle }) {
//     const [showSuccess, setShowSuccess] = useState(false);
//     const [showError, setShowError] = useState(false);
//     const [selectedFile, setSelectedFile] = useState(null);

//     const [formData, setFormData] = useState({
//         fullname: "",
//         email: "",
//         userId: "",
//         nickname: "",
//         dob: "",
//         gender: "",
//         city: "",
//         address: "",
//         profilePhoto: "",
//     });

//     useEffect(() => {
//         if (userId) {
//             axios.get(`http://localhost:5000/farmer/${userId}`)
//                 .then(res => {
//                     const data = res.data;
//                     setFormData({
//                         fullname: data.fullname || "",
//                         email: data.email || "",
//                         userId: data.userId || "",
//                         nickname: data.nickname || "",
//                         dob: data.dob || "",
//                         gender: data.gender || "",
//                         city: data.city || "",
//                         address: data.address || "",
//                         profilePhoto: data.profilePhoto || "",
//                     });
//                 })
//                 .catch(err => console.error(err));
//         }
//     }, [userId]);

//     const handleChange = (e) => {
//         setFormData(prev => ({
//             ...prev,
//             [e.target.id]: e.target.value
//         }));
//     };

//     const handleFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const updatedData = { ...formData };

//         if (selectedFile) {
//             const base64 = await convertToBase64(selectedFile);
//             updatedData.profilePhoto = base64;
//         }

//         try {
//             const res = await axios.put(`http://localhost:5000/farmer/${userId}`, updatedData);
//             setFormData(res.data.farmer);
//             setShowSuccess(true);
//             setTimeout(() => setShowSuccess(false), 2000);
//         } catch (err) {
//             console.error(err);
//             setShowError(true);
//             setTimeout(() => setShowError(false), 2000);
//         }
//     };

//     const convertToBase64 = (file) => {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => resolve(reader.result);
//             reader.onerror = error => reject(error);
//         });
//     };

//     return (
//         <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-50 ${profileStatus ? "scale-1" : "-scale-0"}  transition-all duration-100`}>
//             <div className={`bg-white rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-4xl flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-10 mx-8 my-4 relative ${profileStatus ? "scale-1" : "-scale-0"}  transition-all duration-500`}>

//                 <button onClick={handleProfileToggle} className='absolute top-10 right-8 md:top-5 md:right-5'>
//                     <img src={closeIcon} alt="close" />
//                 </button>

//                 {/* Avatar and Info */}
//                 <div className="px-4 py-6 w-full flex flex-col md:items-center md:text-left border border-[#3F7D58] rounded-lg">
//                     <img
//                         src={formData.profilePhoto || avatarIcon}
//                         alt="avatar"
//                         className="w-[120px] border-2 border-black object-cover mb-4 rounded-full p-1"
//                     />

//                     <h3 className="text-xl font-bold text-[#3F7D58]">{formData.fullname ? formData.fullname.toUpperCase() : "Your Name"}</h3>
//                     <p className='text-sm text-[#3F7D58]'>{formData.userId || "Farmer ID"}</p>
//                     <p className="text-sm text-[#3F7D58]">{formData.email || "Your Email"}</p>

//                     <label className="text-[#3F7D58] my-4 px-4 py-2 rounded-lg border-2 border-[#3F7D58] hover:bg-[#3F7D58] hover:text-white transition-all duration-300 " htmlFor="edit-profilePic">Update Avatar</label>
//                     <input id="edit-profilePic" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
//                 </div>

//                 {/* Form Section */}
//                 <form className="w-full max-w-sm" onSubmit={handleSubmit}>
//                     <div>
//                         <label className='font-semibold text-sm text-[#3F7D58]' htmlFor="nickname">Your Nickname</label><br />
//                         <input className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#3F7D58] transition-all duration-300 my-2 focus:border-[#3F7D58]" type="text" id="nickname" value={formData.nickname || ""} onChange={handleChange} />
//                     </div>

//                     <div>
//                         <label htmlFor="dob" className="font-semibold text-sm text-[#3F7D58] block mb-1">Date of Birth</label>
//                         <input className="border rounded-lg px-3 py-1 mb-4 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-[#3F7D58]" type="date" id="dob" value={formData.dob || ""} onChange={handleChange} />
//                     </div>

//                     <div>
//                         <label htmlFor="gender" className="font-semibold text-sm text-[#3F7D58] block mb-1">Gender</label>
//                         <select className="border rounded-lg px-3 py-1 mb-2 text-sm w-full focus:border-[#3F7D58] focus:ring focus:ring-[#3F7D58] text-[#3F7D58]" id="gender" value={formData.gender || ""} onChange={handleChange}>
//                             <option className='text-white bg-[#3F7D58]' value="">Select</option>
//                             <option className='text-white bg-[#3F7D58]' value="male">Male</option>
//                             <option className='text-white bg-[#3F7D58]' value="female">Female</option>
//                             <option className='text-white bg-[#3F7D58]' value="other">Other</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label className='font-semibold text-sm text-[#3F7D58]' htmlFor="city">City</label><br />
//                         <input className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#3F7D58] transition-all duration-300 my-2 focus:border-[#3F7D58]" type="text" id="city" value={formData.city || ""} onChange={handleChange} />
//                     </div>

//                     <div>
//                         <label className='font-semibold text-sm text-[#3F7D58]' htmlFor="address">Address</label><br />
//                         <textarea className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#3F7D58] transition-all duration-300 my-2 focus:border-[#3F7D58]" id="address" value={formData.address || ""} onChange={handleChange} />
//                     </div>

//                     <button className="w-full px-4 py-2 text-[#3F7D58] border-2 border-[#3F7D58] font-medium hover:bg-[#3F7D58] hover:text-white rounded-md transition-all duration-300 my-4" type="submit">
//                         Save
//                     </button>
//                 </form>
//             </div>

//             <SuccessMessage title={"Success :)"} message={"All changes saved!"} show={showSuccess} />
//             <ErrorMessage title={"Profile update failed!!"} message={"cannot save changes"} show={showError} />
//         </div>
//     );
// }

// export default FarmerProfile;


import React, { useEffect, useState } from "react";
import avatarIcon from "../assets/images/person.svg";
import closeIcon from "../assets/images/closeIcon.svg";
import axios from "axios";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

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
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-50 ${profileStatus ? "scale-1" : "-scale-0"}  transition-all duration-100`}>
            <div className={`bg-white rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-4xl flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-10 mx-8 my-4 relative ${profileStatus ? "scale-1" : "-scale-0"}  transition-all duration-500`}>

                <button onClick={handleProfileToggle} className='absolute top-10 right-8 md:top-5 md:right-5'>
                    <img src={closeIcon} alt="close" />
                </button>

                {/* Avatar and Info */}
                <div className="px-4 py-6 w-full flex flex-col md:items-center md:text-left border border-[#3F7D58] rounded-lg">
                    <img
                        src={formData.profilePhoto || avatarIcon}
                        alt="avatar"
                        className="w-[150px] h-[150px] object-cover  mb-4 rounded-full "
                    />

                    <h3 className="text-xl font-bold text-[#3F7D58]">{formData.fullname ? formData.fullname.toUpperCase() : "Your Name"}</h3>
                    <p className='text-sm text-[#3F7D58]'>{formData.userId || "Farmer ID"}</p>
                    <p className="text-sm text-[#3F7D58]">{formData.email || "Your Email"}</p>

                    <label className="text-[#3F7D58] my-4 px-4 py-2 rounded-lg border-2 border-[#3F7D58] hover:bg-[#3F7D58] hover:text-white transition-all duration-300 " htmlFor="edit-profilePic">Update Avatar</label>
                    <input id="edit-profilePic" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                </div>

                {/* Form Section */}
                <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                    <div>
                        <label className='font-semibold text-sm text-[#3F7D58]' htmlFor="nickname">Your Nickname</label><br />
                        <input className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#3F7D58] transition-all duration-300 my-2 focus:border-[#3F7D58]" type="text" id="nickname" value={formData.nickname || ""} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="dob" className="font-semibold text-sm text-[#3F7D58] block mb-1">Date of Birth</label>
                        <input className="border rounded-lg px-3 py-1 mb-4 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-[#3F7D58]" type="date" id="dob" value={formData.dob || ""} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="gender" className="font-semibold text-sm text-[#3F7D58] block mb-1">Gender</label>
                        <select className="border rounded-lg px-3 py-1 mb-2 text-sm w-full focus:border-[#3F7D58] focus:ring focus:ring-[#3F7D58] text-[#3F7D58]" id="gender" value={formData.gender || ""} onChange={handleChange}>
                            <option className='text-white bg-[#3F7D58]' value="">Select</option>
                            <option className='text-white bg-[#3F7D58]' value="male">Male</option>
                            <option className='text-white bg-[#3F7D58]' value="female">Female</option>
                            <option className='text-white bg-[#3F7D58]' value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className='font-semibold text-sm text-[#3F7D58]' htmlFor="city">City</label><br />
                        <input className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#3F7D58] transition-all duration-300 my-2 focus:border-[#3F7D58]" type="text" id="city" value={formData.city || ""} onChange={handleChange} />
                    </div>

                    <div>
                        <label className='font-semibold text-sm text-[#3F7D58]' htmlFor="address">Address</label><br />
                        <textarea className="w-full px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#3F7D58] transition-all duration-300 my-2 focus:border-[#3F7D58]" id="address" value={formData.address || ""} onChange={handleChange} />
                    </div>

                    <button className="w-full px-4 py-2 text-[#3F7D58] border-2 border-[#3F7D58] font-medium hover:bg-[#3F7D58] hover:text-white rounded-md transition-all duration-300 my-4" type="submit">
                        Save
                    </button>
                </form>
            </div>

            <SuccessMessage title={"Success :)"} message={"All changes saved!"} show={showSuccess} />
            <ErrorMessage title={"Profile update failed!!"} message={"cannot save changes"} show={showError} />
        </div>
    );
}

export default FarmerProfile;
