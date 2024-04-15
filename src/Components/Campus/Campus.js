import React from 'react'
import Title from '../Title/Title'
import './Campus.css'
import gallery_1 from "../../assests/gallery-1.png"
import gallery_2 from "../../assests/gallery-2.png"
import gallery_3 from "../../assests/gallery-3.png"
import gallery_4 from "../../assests/gallery-4.png"
import white_arrow from '../../assests/white-arrow.png'
const Campus = () => {
  return (
    <div>
      <Title subTitle="GALLERY" title="Campus Photos"/>
      <div className='campus container'>
        <div className='gallery'>
            <img src={gallery_1} alt='gallery'/>
            <img src={gallery_2} alt='gallery'/>
            <img src={gallery_3} alt='gallery'/>
            <img src={gallery_4} alt='gallery'/>
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt=''/></button>
        </div>
    </div>
  )
}

export default Campus
