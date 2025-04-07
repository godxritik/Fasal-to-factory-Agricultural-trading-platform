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

function AddItem({ addItemStatus, handleAddItemToggle }) {
    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 ${addItemStatus ? "scale-1" : "-scale-0"} transition-all duration-100`}>
            <div className={`bg-[#3f7d58] rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-lg mx-8 my-4 shadow-lg relative ${addItemStatus ? "scale-1" : "-scale-0"} transition-all duration-500`}>

                <button onClick={handleAddItemToggle} className='absolute top-10 right-8 md:top-5 md:right-5'>
                    <img src={closeIconWhite} alt="close" />
                </button>

                <h2 className="text-2xl font-semibold text-white mb-3">Add New Item</h2>
                <hr className="mb-3 " />

                <div className="flex flex-col space-y-4 text-white">
                    <div className="flex flex-col">
                        <label className='font-semibold text-sm text-[#fff]' htmlFor="product-name">Product name</label>
                        <input type="text"  className="px-3 py-1 border border-slate-300 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white  bg-opacity-20" />
                    </div>

                    <div className="flex flex-col">
                        <label className='font-semibold text-sm text-[#fff]' htmlFor="product-desc">Description</label>
                        <textarea rows="3"  className="px-3 py-1 border border-slate-300 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white  bg-opacity-20" />
                    </div>

                    <div className="flex flex-col">
                        <label className='font-semibold text-sm text-[#fff]' htmlFor="product-quantity">Quantity</label>
                        <input type="number"  className="px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white  bg-opacity-20 " />
                    </div>

                    <div className="flex flex-col">
                        <label className='font-semibold text-sm text-[#fff]' htmlFor="unit">Unit</label>
                        <select id="unit" className="px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white  bg-opacity-20 ">
                            <option className="text-[#3F7D58] bg-white" value="">Select</option>
                            <option className="text-[#3F7D58] bg-white"  value="kg">Kilograms (kg)</option>
                            <option className="text-[#3F7D58] bg-white" value="quintal">Quintal</option>
                            <option className="text-[#3F7D58] bg-white"  value="Tonne">Tonne</option>
                            <option className="text-[#3F7D58] bg-white"  value="ltr">Litre</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className='font-semibold text-sm text-[#fff]' htmlFor="product-price">Price (per unit in Rs.)</label>
                        <input type="number"  className="px-3 py-1 border border-slate-400 outline-none rounded-md text-sm text-[#fff] transition-all duration-300 my-2 focus:border-[#3F7D58] bg-white  bg-opacity-20 " />
                    </div>
                </div>

                {/* 
                <SuccessMessage title={"Success :)"} message={"All changes saved!"} show={showSuccess} />
                <ErrorMessage title={"Profile update failed!!"} message={"cannot save changes"} show={showError} />
                */}
                
            </div>
        </div>
    );
}

export default AddItem;
