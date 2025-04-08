// import CarouselWithContent from "./CarouselWithContent";
// import Carousel from "./Carousel";
// import manWalking from "../assets/vedios/manWalking.mp4"
import tractor from "../assets/vedios/tractorHarvesting.mp4"
// import DecryptingText from "./animations/DecryptingText";


function Hero() {
    return (

        <section>
            <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16 bg-white  ">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <video className=" rounded-lg" src={tractor} autoPlay={true} muted={true} loop={true}></video>
                    </div>

                    <div className="lg:py-24">
                        <div className='flex flex-col gap-3'>
                            <h2 className="text-4xl font-bold sm:text-7xl text-black font-serif "><span className="hover:border-b-4 border-[#3F7D58] transition-all duration-200">Fasal</span> to Factory</h2>

                        </div>

                        <p className="mt-4 text-gray-500">
                        an initiative to transform  agricultural trade in India
                        </p>

                        <a
                            href="/register"
                            className="mt-8 inline-block rounded bg-white border-2 border-[#3F7D58]  px-12 py-3 text-sm font-medium text-[#3F7D58] hover:bg-[#3F7D58] hover:text-white focus:outline-none focus:ring focus:ring-yellow-400 transition-all duration-300 "
                        >
                            Register now
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero;