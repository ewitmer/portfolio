import React, { Component } from 'react';
import video from '../assets/hero.mp4';
import Mail from 'react-icons/lib/md/mail-outline';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import GitHub from 'react-icons/lib/go/mark-github'


class Hero extends Component {
  render() {
    return (   
    <div className="Hero-container">
        <video loop autoPlay>
            <source src={video} type="video/mp4"></source>
        </video>
        <div className="Hero-overlay">
            <h1>Erin Witmer</h1>
            <h2>Full-stack JavaScript Developer</h2>
            <p>
                <a href="mailto:ecwitmer@gmail.com"><Mail /></a>
                <a href="https://www.linkedin.com/in/erinwitmer" target="_blank"><LinkedIn /></a>
                <a href="https://www.github.com/ewitmer" target="_blank"><GitHub /></a>
            </p>
        </div>
     </div>   
    );
  }
}

export default Hero;