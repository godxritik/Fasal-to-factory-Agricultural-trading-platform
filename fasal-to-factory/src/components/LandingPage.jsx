import Navbar from "./Navbar";
import Hero from "./Hero";
import ContactForm from "./ContactForm";
import Executives from "./Executives";
import Footer from "./Footer";

function LandingPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            {/* <ContactForm/> */}
            <Executives />
            <hr className='border-[#3F7D58] mx-12 my-2' />

        
        </div>
    )
}

export default LandingPage;