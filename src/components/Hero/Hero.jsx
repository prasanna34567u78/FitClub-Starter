import React from 'react'
import Header from '../Header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import Heart from '../../assets/heart.png'
import hero_image_back from '../../assets/hero_image_back.png';
import Calories from '../../assets/calories.png';
import NumberCounter from "number-counter"; 
import {motion} from "framer-motion";
const Hero = () => {
    const transtion = {type : "spring", duration : 3};
    const mobile = window.innerWidth<= 768? true: false;
  return (
     <div className='hero' id='home'>
      <div className='blur hero-blur'></div>
        <div className='left-h'>
            <Header/>
            {/* The best ad */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile ? "165px" : "230px"}}
                whileInView = {{left:"8px"}}
                transition = {{...transtion,type:'tween'}}
                ></motion.div>


                <span>The Best Fitness Club In The Town</span>
            </div>

            {/* Hero heading */}

            <div className='hero-text'>
                <div>
                <span className='stroke-text'>shape </span>
                <span>your</span>
                </div>

                <div>
                <span>Ideal body</span>
                 </div>
                 <div>
                 <span>
                    In here we will help you to shape and build your ideal body and live up your life to fullest 
                 </span>
                 </div>
            </div>
            {/* figures */}
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix ="+"/>
                    </span>
                    <span>expert coachs</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={978} start={800} delay='80' preFix ="+"/>
                    </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={50} start={0} delay='4' prefix ="+"/>
                    </span>
                    <span>fitness programs</span>
                </div>
            </div>
            {/* Hero buttons */}
            <div className="hero-buttons">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className='right-h'>
            <button className='btn'>Join Now</button>
            <motion.div className="heart_rate"
              initial={{right:"-1rem"}}
              whileInView = {{right:"4rem"}}
              transition = {transtion}
            
            >
                <img src={Heart} alt="" />
                <span>Heart rate</span>
                <span>116 bpm</span>
            </motion.div>
            {/* Hero images */}
            <img src={hero_image} alt="" className='hero_image' />
            <motion.img 
              initial={{right:"11rem"}}
              whileInView = {{right:"20rem"}}
              transition = {transtion}
        
            src={hero_image_back} alt="" className='hero_image_back' />

            {/* calories */}
            <motion.div 
               initial={{right:"37rem"}}
               whileInView = {{right:"28rem"}}
               transition = {transtion}
            className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>CaloriesBurned</span>
                <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
     </div>
    );
}

export default Hero