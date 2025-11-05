import React from 'react';
import './Hero.css';
import { FaLocationDot } from "react-icons/fa6";
import CountUp from "react-countup";
import { motion } from 'framer-motion';



const Hero = () => {
  return (
<section className='hero-wrapper'>
    <div className= 'paddings innerWidth flexCenter hero-Container'>
 
 
 {/* Left Side */}
        <div className='hero-left'>
            <div className='flexColStart hero-title'>
                <div className='orange-circle'/>
                <motion.h1
                 initial={{y: "2rem", opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{
                    duration: 2,
                    type: "spring",
                 }}
                >
                    Discover<br /> Most Suitable<br /> Property <br />
                </motion.h1>
            </div>
            <div className='flexColStart hero-des'>
                 <span className='secondaryText'>
                    Find a variety of properties that suit you very easily
                </span>
                    <span className='secondaryText'>
                         with an all-in-one platform
                     </span>
            </div>
            <div className='flexCenter hero-search-bar'>
                <FaLocationDot color='var(--blue)' size={25} />
                <input type='text' />
                <button className='button'>Search</button>
            </div>


            <div className='flexColStart hero-stats'>
                <div className='flexCenter hero-stat'>
                   <span>
                    <CountUp start={8850} end={9000} duration={4} />
                    <span>+</span> 
                    </span>
                   <span className='secondaryText'>Premium Products</span> 
                 
                </div>


<div className='flexCenter hero-stat'>
               <span>
                    <CountUp start={1950} end={2000} duration={4} />
                    <span>+</span> 
                    </span>
                <span className='secondaryText' >Happy Customer</span> 
                
                </div>

<div className='flexCenter hero-stat'>
                <span>
                    <CountUp end={30} /><span>+</span>
                    </span> 
                <span className='secondaryText' >Awards wining</span> 
                
                </div>
            </div>
        </div>


{/* Right Side */}
        <div className='flexCenter hero-right'>
            <motion.div
            initial={{x: "7rem", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{
                duration: 2,
                type: "spring",
             }}
            className='image-container'>
                <img src='./hero-image.png' alt='hero-image' />
            </motion.div>
        </div>
        </div>
</section>
  )
}

export default Hero
