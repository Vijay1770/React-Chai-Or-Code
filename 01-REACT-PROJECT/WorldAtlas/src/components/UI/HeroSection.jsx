import { FaArrowRight } from "react-icons/fa6";


 export const HeroSection=()=>{
    return (
        <main className="hero-section main">
          <div className="container grid grid-two-cols">
            {/* Hero Sectioin... */}
            <div className="hero-content">
              <h1 className="heading-xl">Explore the World, One Ccountry at a Time.</h1>
              <p className="paragraph">
                A happy world is a place where joy and positivity flourish, creating
                an environment where individuals uplift one another. In such a
                world, kindness and compassion are at the forefront, fostering
                connections among diverse communities.
              </p>
              <button className="btn btn-darken btn-inline bg-white-box">
                Start Exploring <FaArrowRight />
              </button>
            </div>
    
            <div className="hero-image">
                <img src="https://www.hindustantimes.com/ht-img/img/2023/03/02/550x309/Eiffel-Tower-in-Paris_1674808656074_1677767621855_1677767621855.jpg" />
            </div>
          </div>
        </main>
      );
}