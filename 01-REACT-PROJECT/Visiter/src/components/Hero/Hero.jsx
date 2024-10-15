import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero =()=>{
    return(
        <>
       <div className="hero container">
       <div className="hero-text">

        <h1>We Ensure better education for a better world</h1>
        <p>Quality education provides equal opportunities for all, bridging social and economic gaps while promoting innovation and adaptability in a rapidly changing world. Investing in education leads to better health, increased productivity, and economic growth, creating a foundation for a brighter future for individuals and communities alike.</p>
         <button className="btn">Explore More < FaArrowRightLong  className="arrow"/>
         </button>
       
       </div>
       </div>
       </>
    )
}
export default Hero;