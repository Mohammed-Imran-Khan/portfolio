import React from 'react';
import '../Components/Components.css';

function Projects() {
  return (
    <div className='container'>
      <hr /><br />
      <h4>Projects</h4>
      <br /><br />
      <div className='projects-container'>
        {/* Project 1 */}
        <div className='card' style={{ width: '35rem' }}>
          <img src="https://th.bing.com/th/id/OIP.SnNCp20ACXp96EltjAqUAAHaFr?pid=ImgDet&w=1200&h=919&rs=1" className="card-img-top" alt="project" />
          <div className='card-body'>
            <h5>CMS</h5><br />
            <p><b>Front-end : </b>ReactJS</p>
            <p><b>Back-end : </b> NodeJS, Express, MongoDB</p>
            <p>
              <b>Front-end Source Code : </b>
              <a href="https://github.com/Mohammed-Imran-Khan/CMS_FrontEnd" target='_blank' rel="noopener noreferrer">Github/CMS/Frontend</a>
            </p>
            <p>
              <b>Back-end Source Code : </b>
              <a href="https://github.com/Mohammed-Imran-Khan/cmsbe" target='_blank' rel="noopener noreferrer">Github/CMS/Backend</a>
            </p>
            <p>
              <b>Deployment URL : </b>
              <a href="https://cms-frontend01.onrender.com/" target='_blank' rel="noopener noreferrer">CMS/Deployment</a>
            </p>
            <p>
              <b>Deployment URL Backend : </b>
              <a href="https://cmsback-f02e.onrender.com/" target='_blank' rel="noopener noreferrer">CMS/Deployment</a>
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className='card' style={{ width: '35rem' }}>
          <img src="https://th.bing.com/th/id/R.ef8a3574815ae569b4225e34ebe11707?rik=82qsbEzsM1Y0Hg&riu=http%3a%2f%2fwww1-lw.xda-cdn.com%2ffiles%2f2016%2f08%2funnamed.png&ehk=5tFO5E5QC2zlkPJyustVj%2fwpEZfEZF1gKtbr93uVS5M%3d&risl=&pid=ImgRaw&r=0" className="card-img-top" alt="project" />
          <div className='card-body'>
            <h5>My contact</h5><br />
            <p><b>Front-end : </b>ReactJS</p>
            <p><b>Back-end : </b> NodeJS, Express, MongoDB</p>
            <p>
              <b>Front-end Source Code : </b>
              <a href="https://github.com/Mohammed-Imran-Khan/to_do-front" target='_blank' rel="noopener noreferrer">Github/my contact/Frontend</a>
            </p>
            <p>
              <b>Back-end Source Code : </b>
              <a href="https://github.com/Mohammed-Imran-Khan/task-42-b.git" target='_blank' rel="noopener noreferrer">Github/my contact/Backend</a>
            </p>
            <p>
              <b>Deployment URL : </b>
              <a href="https://to-do-front-sigma.vercel.app/" target='_blank' rel="noopener noreferrer">Contact/Deployment</a>
            </p>
            <p>
              <b>Deployment URL Backend : </b>
              <a href="https://contact-bfw1.onrender.com/" target='_blank' rel="noopener noreferrer">Contact/Deployment</a>
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div className='card' style={{ width: '35rem' }}>
          <img src="https://th.bing.com/th/id/OIP.TUMg5JMEPpkHoDz4p_3aRAHaE8?w=245&h=180&c=7&r=0&o=5&pid=1.7" className="card-img-top" alt="project" />
          <div className='card-body'>
            <h5>stock overflow</h5><br />
            <p><b>Front-end : </b>ReactJS</p>
            <p><b>Back-end : </b> NodeJS, Express, MongoDB</p>
            <p>
              <b>Front-end Source Code : </b>
              <a href="https://github.com/Mohammed-Imran-Khan/Stock_Overflow_FrontEnd.git" target='_blank' rel="noopener noreferrer">Github/stock overflow/Frontend</a>
            </p>
            <p>
              <b>Back-end Source Code : </b>
              <a href="https://github.com/Mohammed-Imran-Khan/Stack_Overflow_API.git" target='_blank' rel="noopener noreferrer">Github/stock overflow/Backend</a>
            </p>
            <p>
              <b>Deployment URL : </b>
              <a href="https://stock-overflow-front-end.vercel.app/" target='_blank' rel="noopener noreferrer">stock overflow/Deployment</a>
            </p>
            <p>
              <b>Deployment URL Backend : </b>
              <a href="https://stack-overflow-api-ys0g.onrender.com" target='_blank' rel="noopener noreferrer">stock overflow/Deployment</a>
            </p>
          </div>
        </div>

        {/* Project 4 */}
        <div className='card' style={{ width: '35rem' }}>
          <img src="https://www.brsoftech.com/blog/wp-content/uploads/2020/11/Payment-Gateway-Development-1024x683.jpg" className="card-img-top" alt="project" />
          <div className='card-body'>
            <h5>Payment Gateway</h5><br />
            <p><b>Front-end : </b>ReactJS</p>
            <p><b>Back-end : </b> NodeJS, Express, MongoDB</p>
            <p>
              <b>Front-end Source Code : </b>
              <a href="https://github.com/Mohammed-Imran-Khan/Payment_Gateway_App.git" target='_blank' rel="noopener noreferrer">Github/Payment Gateway/Frontend</a>
            </p>
            <p>
              <b>Back-end Source Code : </b>
              <a href="https://github.com/Mohammed-Imran-Khan/Payment_Gateway_App.git" target='_blank' rel="noopener noreferrer">Github/Payment Gateway/Backend</a>
            </p>
            <p>
              <b>Deployment URL : </b>
              <a href="https://payment-gateway-app.vercel.app/" target='_blank' rel="noopener noreferrer">Payment Gateway/Deployment</a>
            </p>
            <p>
              <b>Deployment URL Backend : </b>
              <a href="https://mohammed-imrankhan-payment.onrender.com/" target='_blank' rel="noopener noreferrer">Payment Gateway/Deployment</a>
            </p>
          </div>
        </div>
      </div><br />
    </div>
  )
}

export default Projects;
