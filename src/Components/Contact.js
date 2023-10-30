import React from 'react';
import './Components.css';
import phIcon from '../assets/phone.png';
import mlIcon from '../assets/mail.png';
import lnIcon from '../assets/linkedin.png';
import gitIcon from '../assets/git.png';

function Contact() {
    return (
        <div className='container-fluid contact-container'>
            <div className='container'>
                <br /><br />
                <h4>Contact Me</h4>
                <br /><br />
                <div className='contacts'>
                    <img src={phIcon} alt="phone" width={'25px'} />
                    <a href="tel:9629895696">
                        <b>+91 9629895696</b>
                    </a>
                </div><br />
                <div className='contacts'>
                    <img src={mlIcon} alt="mail" width={'25px'} />
                    <a href="warnerimran786@gmail.com" target={'blank'}><b>warnerimran786@gmail.com</b></a>
                        
                    
                </div><br />
                <div className='contacts'>
                    <img src={lnIcon} alt="linkedin" width={'25px'} />
                    <a href="https://www.linkedin.com/in/warner-imran-0bb1a6283/?originalSubdomain=in" target={'blank'}><b>Linkedin/imrankhan</b></a>
                </div><br />
                <div className='contacts'>
                    <img src={gitIcon} alt="git" width={'25px'} />
                    <a href="https://github.com/Mohammed-Imran-Khan" target={'blank'}><b>Github/imrankhan</b></a>
                </div><br />
                <div>
                    <a href="https://drive.google.com/file/d/1Rbm1cMp9EmLyMP8GCOhhMkCsdn-ke5v4/view?usp=drive_link" target='blank'>
                        <button type="button" className="btn btn-dark">Download Resume</button>
                    </a>
                </div><br /><br />
                <div style={{ textAlign: "center" }}>
                    Developed by "imrankhan"
                </div>
            </div>
            <br />
        </div>
    )
}

export default Contact