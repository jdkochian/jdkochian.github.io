import React from "react";
import h from './headshot.JPG'
import emailIcon from '../email.svg'
import linkedinIcon from '../linkedin.svg'
import githubIcon from '../github.svg'
import phoneIcon from '../phone.svg'
import { useMediaQuery } from "react-responsive";
// import ConwayGrid from "./ConwayGrid";
import '../App.css'

const Sidebar = () => { 

    const mobile = useMediaQuery({query: '(max-device-width: 40em)'}); 

    return ( 

            <div className="photoInfoLaptop">
                <div style={mobile ? {display:'flex', justifyContent:'center'} : {}}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <img className="headshotLaptop" alt='headshot' src={h}></img>
                        <div style={mobile ? {display:'flex', justifyContent:'center'} : {}}>
                            <p>Jacob Kochian <br /> Cornell University <br />jdkochian@gmail.com  <br />732-890-8068 </p> 
                        </div>
                    </div>
                </div>
                <h3 style={mobile ? {display:'flex', justifyContent:'center'} : {margin:0}}>Contact me: </h3>
                <div className={mobile ? 'contactInfoMobile' : 'contactInfoLaptop'}>
                    <a href="https://www.linkedin.com/in/kochian" target="_blank" rel="noreferrer"><img className="mediaIcon" src={linkedinIcon} alt='LinkedIn Icon'/></a>
                    <a href="mailto: jdkochian@gmail.com" target="_blank" rel="noreferrer"><img className="mediaIcon" src={emailIcon} style={{marginTop:'10%'}} alt='Email Icon'/></a>
                    <a href="https://www.github.com/jdkochian" target="_blank" rel="noreferrer"><img className="mediaIcon" src = {githubIcon} alt='GitHub Icon'/></a>
                    <a href="tel:732-890-8068" target="_blank" rel="noreferrer"><img className="mediaIcon" src={phoneIcon} alt='Phone Icon'/></a>


                </div>
            </div>


    )
}

export default Sidebar