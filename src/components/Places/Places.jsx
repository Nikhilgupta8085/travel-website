/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import PlacesCard from './PlacesCard';
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";






 


const PlaceData=[
    {
        img:Img1,
        title:"Boat Tour",
        location:"USA",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 1400,
        type:"Cultural Relax",

    },
    {
        img:Img2,
        title:"Taj Mahal",
        location:"India",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 2100,
        type:"Cultural Relax",

    },
    {
        img:Img3,
        title:"Underwater",
        location:"US",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 3400,
        type:"Cultural Relax",

    },
    {
        img:Img4,
        title:"Sydney",
        location:"USA",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 5200,
        type:"Cultural Relax",

    },
    {
        img:Img5,
        title:"Los Angeles",
        location:"United States",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 5500,
        type:"Cultural Relax",

    },
    {
        img:Img6,
        title:"Loa Vegas",
        location:"California",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 6200,
        type:"Cultural Relax",

    },
]

 const Places = ({handleOrderPopup}) => {
  return (
    <>    <div className='bg-gray-50 py-10'>
        <section data-aos="fade-up" data-aos-delay="300" className='container'>
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
                Best Places to visit
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    PlaceData.map((item,index)=>(
                        <PlacesCard handleOrderPopup={handleOrderPopup} key={index}
                        {...item}/>
                    ))
                }
            </div>
        </section>
    </div>
    </>

  )
}
export default Places;