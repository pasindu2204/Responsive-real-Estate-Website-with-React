import React from 'react';
import './Residencies.css';
import { Swiper, SwiperSlide , useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json'
import { SliderSettings } from '../../utils/common.js';

const Residencies = () => {
  return (
   <section className='r-wrapper'>
    <div className='paddings innerWidth r-container'>
      <div className='flexColStart r-head'>
<span className='orangeText'>Best Choices</span> <br/>
<span className='primaryText'>Popular Residencies</span>
        </div>

        <Swiper {...SliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className='flexColStart r-card'>
                  <img src={card.image} alt='home'/>
                  <span className='r-price'>
                    <span style={{color: 'orange'}}>$</span> 
                    <span className='secondaryText'>{card.price}</span>
                    </span>

                    <span className='primaryText'>{card.name}</span>
                    <span className='secondaryText'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
    </div>

    </section>
  )
}

export default Residencies

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

