import React from 'react'
import Navbar from './Navbar'
import HomeLogo from '../image/home-bg.jpg'
import StudyImage from '../image/study.jpg'

export default function Home() {
    return (
        <div  style={{backgroundImage:`url(${HomeLogo})`,   width: '100%',   display: 'block', height:'100vh'}}>

            <div>
                <img src={StudyImage} alt="" 
                
                style={{height:100}}
                />
            </div>

        </div>
    )
}
