import image1 from "../assets/images/beans.jpg"
import delIcon from "../assets/images/trash.svg"
import checkIcon from "../assets/images/check.svg"

function CartItem(){
    return(
        <div className="border border-white  px-5 py-2 rounded-xl hover:bg-white hover:bg-opacity-5 transition-all duration-300 " >
            <img className="w-40 my-2 rounded-md " src={image1} alt="" />
            <ul className="text-sm font-thin">
                <li>Product name : </li>
                <li>Quantity : </li>
                <li>Unit : </li>
                <li>Price : </li>
                <li>Total Amount : </li>
            </ul>

            <div className="flex my-4 justify-between">
                <button className="border px-3 py-2 border-[#FF0000] rounded-md hover:bg-white hover:bg-opacity-50 hover:border-white transition-all duration-300"><img className="w-[20px]" src={delIcon} alt="" /></button>
                <button className="border px-2 py-2 border-green-500 rounded-md hover:bg-white hover:bg-opacity-50 hover:border-white transition-all duration-300 "><img className="w-[23px]" src={checkIcon} alt="" /></button>
            </div>

        </div>
    )
}

export default CartItem;