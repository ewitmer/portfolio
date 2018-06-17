import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (   
    <div className="Projects-container">
        <a href='https://ewitmer.github.io/openow/' target="_blank" className="project-contents">
            <h1>OPEN NOW</h1>
            <h2>Discover new things to do in your own backyard</h2>
            <div className="github"><a href="https://github.com/ewitmer/openow" target="_blank">view on github</a></div>
        </a>
        
        <a href='https://ancient-plateau-51106.herokuapp.com/' target="_blank" className="project-contents">
            <h1>Book Finder</h1>
            <h2>Discover new books for your baby, toddler or preschooler</h2>
            <div className="github"><a href="https://github.com/ewitmer/book_suggestion" target="_blank">view on github</a></div>
        </a>

        <a href='https://serene-depths-10277.herokuapp.com/' target="_blank" className="project-contents">
            <h1>Bright Night</h1>
            <h2>Set goals and track your daily reading.</h2>  
            <div className="github"><a href="https://github.com/ewitmer/bright_night" target="_blank" >view on github</a></div>
        </a>
    </div>
    );
  }
}

export default Projects;