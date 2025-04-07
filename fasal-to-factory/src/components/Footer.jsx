import plantLogo from '../assets/images/plantLogo.svg'

function Footer(isTrader) {
    return (


        <footer className="rounded-b-xl shadow-sm  bg-[#3F7D58] ">
            <div className="w-full max-w-screen-xl mx-auto p-4 ">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={plantLogo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-lg font-medium whitespace-nowrap text-white">Fasal to Factory</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-4" />
                <span className="block text-sm text-white sm:text-center ">© 2025 <a href="/" className="hover:underline">Fasal to Factory™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer;