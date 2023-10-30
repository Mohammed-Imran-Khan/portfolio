import React from 'react';
import './Components.css';
import mern from '../assets/mern1.png';

function About() {
    return (
        <div className='container'>
            <hr /><br />
            <h4>About me</h4>    
            <br /><br />
            <div className='about-container'>
                <div>
                    <p>
                        Enthusiastic Full Stack Web Developer | Imrankhan

                        Greetings! I am Imrankhan, a determined Full Stack Web Developer hailing from the vibrant city of Madurai, India. With a deep-rooted passion for crafting digital experiences, I am on a quest to make a significant mark in the ever-evolving world of web development.

                        My journey as a Full Stack Web Developer has equipped me with a versatile skill set that encompasses both the artistry of front-end design and the technical wizardry of back-end development. I thrive on challenges and am committed to delivering elegant, user-centric solutions that not only meet but exceed expectations.

                        As I embark on this exciting career path, I am excited to collaborate with dynamic teams, embrace new technologies, and create web applications that are both visually stunning and functionally robust. My mission is to transform innovative ideas into reality and leave an indelible digital footprint.

                        Join me on this adventure, and together, we'll build the web of the future.
                    </p>
                    <br /><br />
                    <h5>Certification</h5><br />
                    <p>Full Stack Web Developer - MERN</p>
                    <p>Institute: Guvi Geeks Network Pvt Ltd</p>
                    <p>Year: 2023</p>
                </div>
                {/* <div>
                  <img src={mern} alt="about" className='about-pic' />
                </div> */}
            </div><br /><br />
        </div>
    )
}

export default About;
