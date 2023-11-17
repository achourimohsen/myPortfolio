import React from 'react'
import './test.css'
import AVA1 from '../../assets/AVAT1.avif'
import AVA2 from '../../assets/AVAT2.avif'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar : AVA1,
    name: 'tina snow',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, nobis id, amet, labore itaque voluptatum corporis repellendus saepe voluptatibus praesentium modi expedita fugiat reiciendis. Repudiandae, asperiores? Magnam praesentium autem odio."
  },
  {
    avatar : AVA2,
    name: 'Dead snow',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, nobis id, amet, labore itaque voluptatum corporis repellendus saepe voluptatibus praesentium modi expedita fugiat reiciendis. Repudiandae, asperiores? Magnam praesentium autem odio."
  },
  {
    avatar : AVA1,
    name: 'tina snow',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, nobis id, amet, labore itaque voluptatum corporis repellendus saepe voluptatibus praesentium modi expedita fugiat reiciendis. Repudiandae, asperiores? Magnam praesentium autem odio."
  }

]
const test = () => {
  return (
    <section id='test'> 
      <h5>Review from Clients</h5>
      <h2>  Testimonials</h2>

      <Swiper className='container test__container'
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')} 
       >
        
        {data.map(( {avatar,name, review}, index) => {
          return (
            <SwiperSlide key = {index} className='test'>
              <div className='client__avatar'>
                <img src={avatar} alt="" />
              </div>  
              <h5 className='client__name'>
                {name}
              </h5>
              <small className='client__review'>
                {review}
              </small>
      
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default test