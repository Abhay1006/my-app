import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/GitHub'
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Abhay</h2>
        <div className='prompt'>
          <p>
          A software developer with a passion for learning and problem solving.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className='skills'>
      <h1> Skills</h1>
      <ol className='list'>
      <li className='itme'>
        <h2> Front-End</h2>
        <span>ReactJs, HTML, CSS, NPM, BootStap</span>
      </li>
      <li className='item'>
        <h2> Back-End</h2>
        <span> NodeJs, MySQL </span>
      </li>
      <li className='item'>
        <h2> Languages</h2>
        <span>C, C++, Python, JavaScript</span>
      </li>
      </ol>
      </div>
    </div>
  )
}

export default Home
