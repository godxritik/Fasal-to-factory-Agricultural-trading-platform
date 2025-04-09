import React, { useState } from "react";
import SpotlightCard from "../components/animations/SpotlightCard";
import closeIconWhite from "../assets/images/closeIcon-white.svg";
import SuccessMessage from "../components/SuccessMessage";
import ErrorMessage from "../components/ErrorMessage";

function AddItem({ addItemStatus, handleAddItemToggle }) {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    unit: "",
    quantity: "",
    price: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.productName &&
      formData.description &&
      formData.unit &&
      formData.quantity &&
      formData.price
    ) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        handleAddItemToggle(); // Close modal
      }, 1500);
      console.log("Item added:", formData);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 1500);
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 ${
        addItemStatus ? "scale-100" : "scale-0"
      } transition-all duration-100  `}
    >
      <SpotlightCard className="custom-spotlight-card rounded-xl overflow-hidden " spotlightColor="#14532d">
        <div className={`bg-transparent rounded-lg p-4 sm:p-8 md:p-10 w-full flex flex-wrap justify-around items-center gap-6 relative overflow-y-auto max-h-[90vh] no-scrollbar ${
        addItemStatus ? "scale-100" : "scale-0"
      } transition-all duration-500  `}>
          {/* Close Button */}
          <button
            onClick={handleAddItemToggle}
            className="absolute top-4 right-4 md:top-5 md:right-5 z-10"
          >
            <img src={closeIconWhite} alt="close" />
          </button>

          {/* Add Item Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-[400px] text-white"
          >
            <h2 className="text-xl font-bold text-white mb-4 text-center">
              Add New Product
            </h2>

            <hr className="my-3" />

            <div className="mb-3">
              <label htmlFor="productName" className="font-semibold text-sm">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                value={formData.productName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-slate-400 text-sm bg-white bg-opacity-20 text-white focus:outline-none focus:border-[#3F7D58]"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="font-semibold text-sm">
                Description
              </label>
              <textarea
                id="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-slate-400 text-sm bg-white bg-opacity-20 text-white focus:outline-none focus:border-[#3F7D58]"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="unit" className="font-semibold text-sm">
                Unit
              </label>
              <select
                id="unit"
                value={formData.unit}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-slate-400 text-sm bg-white bg-opacity-20 text-white focus:outline-none focus:border-[#3F7D58]"
              >
                <option value="" className="text-[#3F7D58] bg-white">
                  Select Unit
                </option>
                <option value="kg" className="text-[#3F7D58] bg-white">
                  Kilogram (kg)
                </option>
                <option value="quintal" className="text-[#3F7D58] bg-white">
                  Quintal
                </option>
                <option value="tonne" className="text-[#3F7D58] bg-white">
                  Tonne
                </option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="quantity" className="font-semibold text-sm">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-slate-400 text-sm bg-white bg-opacity-20 text-white focus:outline-none focus:border-[#3F7D58]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="font-semibold text-sm">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-slate-400 text-sm bg-white bg-opacity-20 text-white focus:outline-none focus:border-[#3F7D58]"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white border-2 border-white font-medium hover:bg-white hover:text-[#3f7d58] rounded-md transition-all duration-300"
            >
              Add
            </button>
          </form>
        </div>
      </SpotlightCard>

      <SuccessMessage
        title="Success :)"
        message="Item added successfully!"
        show={showSuccess}
      />
      <ErrorMessage
        title="Error!"
        message="Please fill out all fields."
        show={showError}
      />
    </div>
  );
}

export default AddItem;
