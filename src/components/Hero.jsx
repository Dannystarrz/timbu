import BoxedFavourite from "./BoxedFavourite";
import Button from "./Button";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Hero = () => {
    return (
      <>
        <div className="bg-auto bg-no-repeat bg-center h-full w-full items-center py-8 md:py-10 bg-[url('/bubbles.svg')] flex flex-col md:gap-8">
          <Navbar/>
          <div className="max-w-7xl mx-auto  text-center">
            <h1 className="text-2xl md:text-4xl font-light text-accent leading-relaxed md:leading-relaxed header">
              Your one stop shop to all skincare products <br /> both local and international brands
            </h1>
            <div className="mt-6 md:mt-6 flex flex-wrap justify-center gap-2 md:gap-4">
              <button className="bg-pink-500 text-accent-400 font-semibold py-2 px-4 md:px-6 rounded-full md:rounded-2xl shadow-md">
                Body Care
              </button>
              <button className="bg-white py-2 px-4 md:px-6 border border-pink-500 text-accent-400 font-medium rounded-full md:rounded-2xl mt-2 md:mt-0">
                Face Care
              </button>
              <button className="bg-white py-2 px-4 md:px-6 border border-pink-500 text-accent-400 font-medium rounded-full md:rounded-2xl mt-2 md:mt-0">
                Private Hygiene
              </button>
              <button className="bg-white py-2 px-4 md:px-6 border border-pink-500 text-accent-400 font-medium rounded-full md:rounded-2xl mt-2 md:mt-0">
                Scents
              </button>
            </div>
          </div>
          <section className="bg-[#FFE8EC] lg:mt-12 lg:px-16 w-full lg:pb-16">
            <div className="bg-[url('starElipse.svg')] bg-contain bg-no-repeat bg-center md:px-6 md:py-8 lg:w-fit flex items-center justify-center">
              <h2 className="font-bold lg:text-2xl">Body Care Best Seller</h2>
            </div>
            <div className="flex w-full lg:mb-16">
              <div className="w-1/4 border-t-2 border-black pt-12 pr-8">
                <img src="/medix.png" alt="medix" className="lg:w-full border-2 border-dashed border-stone-500"/>
                <div className="flex flex-col mt-6 gap-6">
                  <div className="text-xl">
                    <p className=" text-[#5C4B4E] "> <span className="font-medium text-xl text-[#332427]">MEDIX 5.5 </span>Body Moisturizer</p>
                    <p className="text-[#5C4B4E]">Glycolic and Lactic Acid</p>
                  </div>
                  <div className="flex justify-between md:w-full items-center">
                    <p className="text-xl font-bold">#15,000</p>
                    <div className="flex gap-4 items-center">
                      <Button buttonText={'Add to cart'}/>
                      <BoxedFavourite/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4">
                <div className="w-full h-12 border-b-2 border-black border-x-2"></div>
                <img src="/Amalactin.png" alt="Amalactin" className="lg:w-full mt-12 mr-8 border-2 border-dashed border-stone-500"/>
                <div className="flex flex-col mt-6 gap-6">
                  <div className="text-lg">
                    <p className=" text-[#5C4B4E] "> <span className="font-medium text-xl text-[#332427]">AmLactin </span>Body Moisturizer</p>
                    <p className="text-[#5C4B4E]">12% Lactic Acid</p>
                  </div>
                  <div className="flex justify-between md:w-full items-center">
                    <p className="text-xl font-bold">#145,300</p>
                    <div className="flex gap-4 items-center">
                      <Button buttonText={'Add to cart'}/>
                      <BoxedFavourite/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4 border-t-2 border-black pt-12 pl-2 pr-5">
                <img src="/Olay.png" alt="Olay" className="lg:w-full border-2 border-dashed border-stone-500"/>
                <div className="flex flex-col mt-6 gap-6">
                  <div className="text-lg">
                    <p className=" text-[#5C4B4E] "> <span className="font-medium text-xl text-[#332427]">Olay </span>Body Moisturizer</p>
                    <p className="text-[#5C4B4E]">Mango Butter & Vanilla Orchid</p>
                  </div>
                  <div className="flex justify-between md:w-full items-center">
                    <p className="text-xl font-bold">#32,000</p>
                    <div className="flex gap-4 items-center">
                      <Button buttonText={'Add to cart'}/>
                      <BoxedFavourite/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4">
                <div className="w-full h-12 border-b-2 border-black border-l-2"></div>
                <img src="/Naturium.png" alt="Naturium" className="lg:w-full border-2 mt-12 border-dashed border-stone-500"/>
                <div className="flex flex-col mt-6 gap-6">
                  <div className="text-lg">
                    <p className=" text-[#5C4B4E] "> <span className="font-medium text-xl text-[#332427]">Naturium </span>Body Wash</p>
                    <p className="text-[#5C4B4E]">Gel - Gel</p>
                  </div>
                  <div className="flex justify-between md:w-full items-center">
                    <p className="text-xl font-bold">#32,000</p>
                    <div className="flex gap-4 items-center">
                      <Button buttonText={'Add to cart'}/>
                      <BoxedFavourite/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      </>
    );
  };
  
  export default Hero;
  