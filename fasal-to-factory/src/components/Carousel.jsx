// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "react-feather";
// import sliderImage1 from "../assets/carousel/sliderImage1.jpg"
// import sliderImage2 from "../assets/carousel/corn.jpg"

// import sliderImage4 from "../assets/carousel/wheatPlant.jpg"
// import sliderImage5 from "../assets/carousel/daal.jpg"
// import sliderImage6 from "../assets/carousel/sugarcane.jpg"
// import sliderVideo1 from "../assets/carousel/manharvesting.mp4"
// import sliderVideo2 from "../assets/carousel/manPicking.mp4"

// export default function ResponsiveCarousel({
//   autoSlide = true,
//   autoSlideInterval = 3000,
// }) {
//   // Using the same image for all slides (replace with different images as needed)
//   const slides = [
//     <img key={1} src={sliderImage1} className="w-full h-full object-cover" alt="Slide 1" />,
//     <img key={2} src={sliderImage2} className="w-full h-full object-cover" alt="Slide 2" />,
//     <video key={3} src={sliderVideo1} className="w-full h-full object-cover" alt="Slide 3" muted loop autoPlay playsInline />,
//     <img key={4} src={sliderImage4} className="w-full h-full object-cover" alt="Slide 3" />,
//     <video key={5} src={sliderVideo2} className="w-full h-full object-cover" alt="Slide 3" muted loop autoPlay playsInline />,
//     <img key={6} src={sliderImage6} className="w-full h-full object-cover" alt="Slide 3" />,

//     <img key={7} src={sliderImage5} className="w-full h-full object-cover" alt="Slide 3" />,
    
//   ];

//   const [curr, setCurr] = useState(0);

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(next, 3000);
//     return () => clearInterval(slideInterval);
//   }, [autoSlide, autoSlideInterval]); // Added dependencies

//   return (
//     <div className="relative w-full overflow-hidden group">
//       {/* Responsive height container */}
//       <div className="aspect-video w-full h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[65vh] xl:h-[70vh]">
//         <div
//           className="flex h-full transition-transform ease-out duration-500"
//           style={{ transform: `translateX(-${curr * 100}%)` }}
//         >
//           {slides.map((slide, i) => (
//             <div key={i} className="w-full h-full flex-shrink-0">
//               {slide}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation buttons - appear on hover */}
//       <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <button
//           onClick={prev}
//           className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-colors duration-200 hidden"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={32} className="sm:size-8 md:size-10" />
//         </button>
//         <button
//           onClick={next}
//           className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-colors duration-200 hidden"
//           aria-label="Next slide"
//         >
//           <ChevronRight size={32} className="sm:size-8 md:size-10" />
//         </button>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-4 left-0 right-0">
//         <div className="flex items-center justify-center gap-2">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurr(i)}
//               className={`transition-all w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full ${
//                 curr === i ? "w-4 sm:w-6 bg-opacity-100" : "bg-opacity-50"
//               }`}
//               aria-label={`Go to slide ${i + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }\


import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import sliderImage1 from "../assets/carousel/sliderImage1.jpg"
import sliderImage2 from "../assets/carousel/corn.jpg"
import sliderImage4 from "../assets/carousel/wheatPlant.jpg"
import sliderImage5 from "../assets/carousel/daal.jpg"
import sliderImage6 from "../assets/carousel/sugarcane.jpg"
import sliderVideo1 from "../assets/carousel/manharvesting.mp4"
import sliderVideo2 from "../assets/carousel/manPicking.mp4"

export default function ResponsiveCarousel({
  autoSlide = true,
  autoSlideInterval = 3000,
}) {
  // Each slide now includes both the media and the overlay content
  const slides = [
    {
      media: <img key={1} src={sliderImage1} className="w-full h-full object-cover" alt="Slide 1" />,
      overlay: (
        <div className="absolute inset-0 flex items-center justify-center text-white p-4">
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to Fasal to Factory</h2>
            <p className="text-lg sm:text-xl md:text-2xl">Discover the freshest produce grown with care</p>
          </div>
        </div>
      )
    },
    {
      media: <img key={2} src={sliderImage2} className="w-full h-full object-cover" alt="Slide 2" />,
      overlay: (
        <div className="absolute inset-0 flex items-center justify-end text-white p-4">
          <div className="text-right max-w-xl mr-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Organic Corn</h2>
            <p className="text-lg sm:text-xl md:text-2xl">Naturally grown without harmful chemicals</p>
          </div>
        </div>
      )
    },
    {
      media: <video key={3} src={sliderVideo1} className="w-full h-full object-cover" alt="Slide 3" muted loop autoPlay playsInline />,
      overlay: (
        <div className="absolute inset-0 flex items-end justify-start text-white p-4">
          <div className="text-left max-w-xl mb-8 ml-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Harvest Season</h2>
            <p className="text-lg sm:text-xl md:text-2xl">Our farmers working hard to bring you the best</p>
          </div>
        </div>
      )
    },
    {
      media: <img key={4} src={sliderImage4} className="w-full h-full object-cover" alt="Slide 4" />,
      overlay: (
        <div className="absolute inset-0 flex justify-center items-center text-white p-4">
          <div className="text-center max-w-3xl mt-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">Sustainable Farming</h2>
            <p className="text-lg sm:text-xl md:text-2xl">Growing for today and tomorrow</p>
          </div>
        </div>
      )
    },
    {
      media: <video key={5} src={sliderVideo2} className="w-full h-full object-cover" alt="Slide 5" muted loop autoPlay playsInline />,
      overlay: (
        <div className="absolute inset-0 flex items-center justify-center text-white p-4">
          <div className="text-center max-w-2xl bg-black bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Hand-Picked Quality</h2>
            <p className="text-lg sm:text-xl md:text-2xl">Every product carefully selected for you</p>
          </div>
        </div>
      )
    },
    {
      media: <img key={6} src={sliderImage6} className="w-full h-full object-cover" alt="Slide 6" />,
      overlay: (
        <div className="absolute inset-0 flex items-center justify-start text-white p-4">
          <div className="text-left max-w-xl ml-8 bg-black bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Fresh Sugarcane</h2>
            <p className="text-lg sm:text-xl md:text-2xl">Naturally sweet and refreshing</p>
          </div>
        </div>
      )
    },
    {
      media: <img key={7} src={sliderImage5} className="w-full h-full object-cover" alt="Slide 7" />,
      overlay: (
        <div className="absolute inset-0 flex items-end justify-end text-white p-4">
          <div className="text-right max-w-xl mb-8 mr-8 bg-black bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Premium Daal</h2>
            <p className="text-lg sm:text-xl md:text-2xl">Rich in protein and flavor</p>
          </div>
        </div>
      )
    },
  ];

  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Responsive height container */}
      <div className="aspect-video w-full h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[65vh] xl:h-[70vh]">
        <div
          className="flex h-full transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full h-full flex-shrink-0 relative">
              {slide.media}
              {/* Overlay layer */}
              <div className="absolute inset-0 bg-black bg-opacity-30">
                {slide.overlay}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons - appear on hover */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-colors duration-200 "
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} className="sm:size-8 md:size-10" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-colors duration-200 "
          aria-label="Next slide"
        >
          <ChevronRight size={32} className="sm:size-8 md:size-10" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              className={`transition-all w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full ${
                curr === i ? "w-4 sm:w-6 bg-opacity-100" : "bg-opacity-50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}