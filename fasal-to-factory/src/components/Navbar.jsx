import plantLogo from "../assets/images/plantLogo.svg"


function Navbar() {

    return (
        <div className="flex flex-col xs:flex-row flex-wrap gap-4 border px-4 py-2 justify-between items-center bg-[#3F7D58] text-white rounded-t-xl text-lg">
        {/* Logo and Brand Name - Always stays on left */}
        <a href="/" className="flex gap-2 items-center order-1 xs:order-none">
          <img className="w-[40px]" src={plantLogo} alt="Farm Logo" />
          <span>Fasal 2 factory</span>
        </a>
      
        {/* Navigation Links - Stacks vertically on small screens */}
        <ul className="flex flex-col xs:flex-row items-center gap-4 order-3 xs:order-none w-full xs:w-auto justify-center">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/farmer-dashboard" className="hover:underline">About</a></li>
          <li><a href="/contact-us" className="hover:underline">Contact</a></li>
        </ul>
      
        {/* Login Button - Moves to right on larger screens */}
        <a className="border border-white px-4 py-1 rounded-lg order-2 xs:order-none hover:bg-white hover:text-[#3F7D58] transition-colors" href="/login">
          Login
        </a>
      </div>
    )
}

export default Navbar;