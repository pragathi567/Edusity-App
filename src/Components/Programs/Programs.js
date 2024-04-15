import React from 'react'
import './Programs.css'
import program_1 from '../../assests/program-1.png'
import program_2 from '../../assests/program-2.png'
import program_3 from '../../assests/program-3.png'
import program_icon_1 from '../../assests/program-icon-1.png'
import program_icon_2 from '../../assests/program-icon-2.png'
import program_icon_3 from '../../assests/program-icon-3.png'
import Title from '../Title/Title'
const Programs = () => {
  return (
    <div>
      <Title subTitle="OUR PROGRAM" title="What We Offer"/>
    <div className='programs container'>
      <div className='program'>
        <img src={program_1} alt='program_1'/>
        <div className='caption'>
          <img src={program_icon_1} alt=''/>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_2} alt='program_1'/>
        <div className='caption'>
          <img src={program_icon_2} alt=''/>
          <p>Masters Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_3} alt='program_1'/>
        <div className='caption'>
          <img src={program_icon_3} alt=''/>
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Programs
