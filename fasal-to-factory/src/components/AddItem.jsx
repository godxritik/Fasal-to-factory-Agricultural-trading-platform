// import closeIconWhite from "../assets/images/closeIcon-white.svg"

// function AddItem({ addItemStatus, handleAddItemToggle }) {
//     return (
//         <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 ${addItemStatus ? "scale-1" : "-scale-0"}  transition-all duration-100  `}>

//             <div className={`bg-[#3f7d58] rounded-lg p-6 sm:p-8 md:p-10 w-full justify-around items-center md:space-x-10 mx-8 my-4 shadow-lg relative ${addItemStatus ? "scale-1" : "-scale-0"}  transition-all duration-500`}>

//                 <button onClick={handleAddItemToggle} className='absolute top-10 right-8 md:top-5 md:right-5'>
//                     <img src={closeIconWhite} alt="close" />
//                 </button>


//                 <div>

//                     <h2 className="text-2xl font-semibold text-white">Add New Item</h2>

//                     <div className="text-white">
//                         <label htmlFor="product-name">Product name</label>
//                         <input type="text" placeholder="e.g. corn, wheat, etc." />
//                     </div>

//                     <div>
//                         <label htmlFor="product-desc">Description</label>
//                         <textarea rows="3" placeholder="e.g. Organic, local, etc." />
//                     </div>
//                     <div>
//                         <label htmlFor="product-quantity">Quantity</label>
//                         <input type="number" placeholder="e.g. 50, 60, etc." />
//                     </div>
//                     <div>
//                         <label htmlFor="unit">Unit</label>
//                         <select name="" id="unit">
//                             <option className="text-[#3f7d59]" value="">Select</option>
//                             <option className="text-[#3f7d59]" value="kg">KG</option>
//                             <option className="text-[#3f7d59]" value="quintal">Quintal</option>
//                             <option className="text-[#3f7d59]" value="Tonne">Tonne</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label htmlFor="product-price">Price (per unit in Rs.)</label>
//                         <input type="number" placeholder="e.g. 60, 70, etc." />
//                     </div>
//                 </div>


//             </div>

//             {/* <SuccessMessage title={"Success :)"} message={"All changes saved!"} show={showSuccess} />
//             <ErrorMessage title={"Profile update failed!!"} message={"cannot save changes"} show={showError} /> */}
//         </div>
//     )
// }

// export default AddItem;

import closeIconWhite from "../assets/images/closeIcon-white.svg";
import SpotlightCard from "./animations/SpotlightCard";


function AddItem({ addItemStatus, handleAddItemToggle }) {
  return (
        // <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 ${addItemStatus ? "scale-1" : "-scale-0"} transition-all duration-100`}>

        //     <SpotlightCard className="custom-spotlight-card flex  " spotlightColor="#14532d">
        //     <button onClick={handleAddItemToggle} className='absolute top-10 right-8 md:top-5 md:right-5'>
        //             <img src={closeIconWhite} alt="close" />
        //         </button>

        //     <div className={`bg-transparent rounded-2xl  p-2 sm:p-8 md:p-10 w-full  justify-around items-center space-y-2 sm:space-y-4 gap-4 sm:gap-12  relative  ${addItemStatus ? "scale-1" : "-scale-0"} transition-all duration-500 overflow-y-auto max-h-[90vh] no-scrollbar overflow-hidden border `}>



        //         <h2 className="text-2xl font-semibold text-white ">Add New Item</h2>
        //         <hr className="mb-3 " />

        //         <div className="flex flex-col space-y-4 text-white">
        //             <div className="flex flex-col">
        //                 <label className='font-semibold text-sm text-[#fff]' htmlFor="product-name">Product name</label>
        //                 <input type="text" className="px-3 py-1 border border-slate-300 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white  bg-opacity-20" />
        //             </div>

        //             <div className="flex flex-col">
        //                 <label className='font-semibold text-sm text-[#fff]' htmlFor="product-desc">Description</label>
        //                 <textarea rows="3" className="px-3 py-1 border border-slate-300 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white  bg-opacity-20" />
        //             </div>

        //             <div className="flex flex-col">
        //                 <label className='font-semibold text-sm text-[#fff]' htmlFor="product-quantity">Quantity</label>
        //                 <input type="number" className="px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white  bg-opacity-20 " />
        //             </div>

        //             <div className="flex flex-col w-full sm:w-[250px]  ">
        //                 <label className='font-semibold text-sm text-[#fff]' htmlFor="unit">Unit</label>
        //                 <select id="unit" className="px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white  bg-opacity-20 ">
        //                     <option className="text-[#3F7D58] bg-white" value="">Select</option>
        //                     <option className="text-[#3F7D58] bg-white" value="kg">Kilograms (kg)</option>
        //                     <option className="text-[#3F7D58] bg-white" value="quintal">Quintal</option>
        //                     <option className="text-[#3F7D58] bg-white" value="Tonne">Tonne</option>
        //                     <option className="text-[#3F7D58] bg-white" value="ltr">Litre</option>
        //                 </select>
        //             </div>

        //             <div className="flex flex-col">
        //                 <label className='font-semibold text-sm text-[#fff]' htmlFor="product-price">Price (per unit in Rs.)</label>
        //                 <input type="number" className="px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white  bg-opacity-20 " />
        //             </div>
        //         </div>

        //         {/* 
        //         <SuccessMessage title={"Success :)"} message={"All changes saved!"} show={showSuccess} />
        //         <ErrorMessage title={"Profile update failed!!"} message={"cannot save changes"} show={showError} />
        //         */}

        //     </div>

        //     <div className="border p-2 sm:p-4 md:p-6 ">
        //         <span className="">Add product images (max 3)</span>
        //         <input type="file" multiple className="" />

        //     </div>


        //     </SpotlightCard>

        // </div>

//         <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 ${addItemStatus ? "scale-1" : "-scale-0"} transition-all duration-100`}>

//   <SpotlightCard className="custom-spotlight-card w-[95%] sm:w-[90%] md:w-[80%] max-w-5xl flex flex-col md:flex-row gap-4 items-start justify-between my-12 md:my-16 relative px-4 py-2 " spotlightColor="#14532d">

//     {/* Close Button - stays in top right */}
//     <button onClick={handleAddItemToggle} className='absolute top-4 right-4 md:top-5 md:right-5 z-10'>
//       <img src={closeIconWhite} alt="close" />
//     </button>

//     {/* Left Section - Form */}
//     <div className={`bg-transparent rounded-2xl p-2 sm:p-8 md:p-10 w-full md:w-[60%] justify-around items-center space-y-2 sm:space-y-4 gap-4 sm:gap-12 relative transition-all duration-500 overflow-y-auto max-h-[90vh] no-scrollbar overflow-hidden border`}>

//       <h2 className="text-2xl font-semibold text-white">Add New Item</h2>
//       <hr className="mb-3" />

//       <div className="flex flex-col space-y-4 text-white">
//         <div className="flex flex-col">
//           <label className='font-semibold text-sm text-[#fff]' htmlFor="product-name">Product name</label>
//           <input type="text" className="px-3 py-1 border border-slate-300 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white bg-opacity-20" />
//         </div>

//         <div className="flex flex-col">
//           <label className='font-semibold text-sm text-[#fff]' htmlFor="product-desc">Description</label>
//           <textarea rows="3" className="px-3 py-1 border border-slate-300 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white bg-opacity-20" />
//         </div>

//         <div className="flex flex-col">
//           <label className='font-semibold text-sm text-[#fff]' htmlFor="product-quantity">Quantity</label>
//           <input type="number" className="px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white bg-opacity-20" />
//         </div>

//         <div className="flex flex-col w-full sm:w-[250px]">
//           <label className='font-semibold text-sm text-[#fff]' htmlFor="unit">Unit</label>
//           <select id="unit" className="px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white bg-opacity-20">
//             <option className="text-[#3F7D58] bg-white" value="">Select</option>
//             <option className="text-[#3F7D58] bg-white" value="kg">Kilograms (kg)</option>
//             <option className="text-[#3F7D58] bg-white" value="quintal">Quintal</option>
//             <option className="text-[#3F7D58] bg-white" value="Tonne">Tonne</option>
//             <option className="text-[#3F7D58] bg-white" value="ltr">Litre</option>
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label className='font-semibold text-sm text-[#fff]' htmlFor="product-price">Price (per unit in Rs.)</label>
//           <input type="number" className="px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white bg-opacity-20" />
//         </div>
//       </div>
//     </div>

//     {/* Right Section - Image Upload */}
//     <div className="border p-2 sm:p-4 md:p-6 w-full md:w-[35%] flex flex-col gap-2">
//       <span className="text-white">Add product images (max 3)</span>
//       <input type="file" multiple className="w-full text-white" />
//     </div>

//   </SpotlightCard>
// </div>

<div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 ${addItemStatus ? "scale-1" : "-scale-0"} transition-all duration-100`}>
  
  <SpotlightCard className="custom-spotlight-card w-full sm:w-[90%] md:w-[80%] max-w-5xl flex flex-col md:flex-row gap-4 items-start justify-between relative px-4 py-2 md:my-16 rounded-2xl overflow-hidden " spotlightColor="#14532d">

    {/* Close Button - stays in top right */}
    <button onClick={handleAddItemToggle} className='absolute top-4 right-4 md:top-5 md:right-5 z-10'>
      <img src={closeIconWhite} alt="close" />
    </button>

    {/* Left Section - Form */}
    <div className={`bg-transparent  p-2 sm:p-4 md:p-6 w-full md:w-[60%] justify-around items-center space-y-2 sm:space-y-4 gap-4 sm:gap-12 relative transition-all duration-500 overflow-hidden max-h-[90vh] no-scrollbar  `}>

      <h2 className="text-2xl font-semibold text-white">Add New Item</h2>
      <hr className="mb-3" />

      <div className="flex flex-col space-y-4 text-white">
        <div className="flex flex-col">
          <label className='font-semibold text-sm text-[#fff]' htmlFor="product-name">Product name</label>
          <input type="text" className="px-3 py-1 border border-slate-300 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white bg-opacity-20" />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-sm text-[#fff]' htmlFor="product-desc">Description</label>
          <textarea rows="3" className="px-3 py-1 border border-slate-300 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white bg-opacity-20" />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-sm text-[#fff]' htmlFor="product-quantity">Quantity</label>
          <input type="number" className="px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white bg-opacity-20" />
        </div>

        <div className="flex flex-col w-full sm:w-[250px]">
          <label className='font-semibold text-sm text-[#fff]' htmlFor="unit">Unit</label>
          <select id="unit" className="px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white bg-opacity-20">
            <option className="text-[#3F7D58] bg-white" value="">Select</option>
            <option className="text-[#3F7D58] bg-white" value="kg">Kilograms (kg)</option>
            <option className="text-[#3F7D58] bg-white" value="quintal">Quintal</option>
            <option className="text-[#3F7D58] bg-white" value="Tonne">Tonne</option>
            <option className="text-[#3F7D58] bg-white" value="ltr">Litre</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-sm text-[#fff]' htmlFor="product-price">Price (per unit in Rs.)</label>
          <input type="number" className="px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white bg-opacity-20" />
        </div>
      </div>
    </div>


    {/* Right Section - Image Upload */}
    <div className="p-2 sm:p-4 md:p-6 w-full md:w-[35%] flex flex-col gap-2">
      <span className="text-white">Add product images (max 3)</span>
      <input type="file" multiple className="w-full text-white" />
    </div>

  </SpotlightCard>

</div>


  
    );
}

export default AddItem;
