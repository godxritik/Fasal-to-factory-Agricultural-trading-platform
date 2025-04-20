import closeIconWhite from "../assets/images/closeIcon-white.svg";
import SpotlightCard from "./animations/SpotlightCard";
import CartItem from "./CartItem";

function FarmerMyCart({ myCartStatus, handleMyCartToggle }) {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 ${myCartStatus ? "scale-100" : "scale-0"
                } transition-all duration-100 `}
        >
            <SpotlightCard className="custom-spotlight-card rounded-xl overflow-hidden flex " spotlightColor="#14532d" >
                <div
                    className={`bg-transparent rounded-lg w-full max-h-[90vh] overflow-y-scroll scrollbar-hide transition-all duration-500 ${myCartStatus ? "scale-100" : "scale-0"}`}
                >
                    {/* Sticky Top Bar */}
                    <div className="sticky top-0 bg-black bg-opacity-50 backdrop-blur-md pt-4 px-4 sm:px-4 md:px-8 pb-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-white text-xl sm:text-2xl font-semibold">My Cart</h2>
                            <button onClick={handleMyCartToggle}>
                                <img src={closeIconWhite} alt="close" className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Cart Items Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 sm:px-8 md:px-8 pb-6 pt-4 ">
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        
                    </div>
                </div>
            </SpotlightCard>
        </div>
    );
}

export default FarmerMyCart;
