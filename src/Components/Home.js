import React from 'react';
import './Components.css';

import About from './About';
import Skill from './Skills';
import Contact from './Contact';
import ContactModal from './ContactModal';
import Projects from './Projects';


function Home() {
    return (
        <div>
            <div className='container home-container'>
                <div className='home-sec1'>
                    <h3>Hi there,</h3><br />
                    <h1>I'm Mohammed imrankhan</h1><br />
                    <span><b>Full Stack Developer...</b></span><br />
                   
                    <hr />
                    <div className='home-btns'>
                        <ContactModal />
                        {/* <button type="button" className="btn btn-warning">Contact Me</button> */}
                        <a href="https://drive.google.com/file/d/1Rbm1cMp9EmLyMP8GCOhhMkCsdn-ke5v4/view?usp=drive_link" target='blank'>
                            <button type="button" className="btn btn-outline-warning">Download Resume</button>
                        </a>
                    </div>
                    </div>
                    <div className='home-sec2'>
                    < img class="self-image" src="https://th.bing.com/th/id/OIP.dN2sYOXwwVnEwGfLiq_s7gHaGH?pid=ImgDet&rs=1" alt="self">

</img>
                   
                </div>
                
            </div>
            <About />
            <Skill />
            <Projects />
            
            <Contact />
        </div>
    )
}

export default Home