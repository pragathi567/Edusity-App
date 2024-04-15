import React, { useRef } from 'react'
import Title from '../Title/Title'
import './Testimonials.css'
import next_btn from '../../assests/next-icon.png'
import back_btn from '../../assests/back-icon.png'
import user_1 from '../../assests/user-1.png'
import user_2 from '../../assests/user-2.png'
import user_3 from '../../assests/user-3.png'
import user_4 from '../../assests/user-4.png'
const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
 const slideForward = () =>{
     if(tx > -50){
        tx -= 25
     }
     slider.current.style.transform = `translatex(${tx}%)`
 }
 const slideBackward = () =>{
    if(tx < 0){
        tx += 25
     }
     slider.current.style.transform = `translatex(${tx}%)`
 }
  return (
    <div>
      <Title subTitle="TESTIMONIALS" title="What Student Says"/>
      <div className='container'>
        <div className='testinomials'>
          <img src={next_btn} alt='' className='next-btn' onClick={slideForward}/>
          <img src={back_btn} alt='' className='back-btn' onClick={slideBackward}/>
          <div className='slider'>
           <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt='user'/>
                        <div>
                            <h3>Emily Williams </h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt='user'/>
                        <div>
                            <h3>William Jackson </h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt='user'/>
                        <div>
                            <h3>Emily Williams </h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4} alt='user'/>
                        <div>
                            <h3>William Jackson </h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
           </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
