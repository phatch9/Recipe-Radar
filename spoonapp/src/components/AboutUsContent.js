import React, { useState, useEffect } from 'react';
import './AboutUsContent.css'; // Correct the path to your CSS file
function AboutUsContent() {
  const [isVisible, setIsVisible] = useState(false);
  //Effect where when scrolling down, the about us section becomes slowly visible
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const targetOffsetTop = document.getElementById('about-us-content').offsetTop;
      const windowHeight = window.innerHeight;
      if (scrollTop > targetOffsetTop - windowHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="about-us-content" className={`fade-element ${isVisible ? 'visible' : ''}`}>
      {/*About us paragraph (right-hand side of the content section)*/}
      <div className="section">
        <h1 className="heading">
          About Us
        </h1>
        <p className="paragraph">
          Recipe Radar was created for the purpose of university students having a much easier time preparing and cooking daily meals.
          For many students, planning out what to eat for their next meal is often an afterthought, as many of them have other things
          to prioritize such as classes, studying, work, or clubs. Eventually, when the time does come to eat, students realize they haven't
          put enough thought into what to cook, leading them to haphazardly prepare a quick meal or eat out, both of which rarely provide the proper
          nutrients and sustenance. This becomes a much larger problem for those with dietary restrictions, such as vegetarians & vegans, gluten-free,
          or limiting daily calorie intake. From our range of criteria, Recipe Radar is able to generate a meal that fits your daily needs with the push
          of a few functions so that students will never need to worry about their next meal.
        </p>
      </div>
      <div className="section">
      <div className="section"></div>
       {/*Section for all the headshots(bottom of the content section)*/}
        <h1 className="heading">
          Creators
        </h1>
        <div className="tim">
          <h3 className="creator-heading">
            Timothy Kim
          </h3>
          <img src={require('../images/image_67517953.JPG')} alt="Timothy Kim" className="headshot" />
        </div>
        <div className="ryan">
          <h3 className="creator-heading">
            Ryan Tang
          </h3>
          <img src={require('../images/image0.jpg')} alt="Ryan Tang" className="headshot" />
        </div>
        <div className="phat">
          <h3 className="creator-heading">
            Phat Chau
          </h3>
          <img src={require('../images/phat.png')} alt="Phat Chau" className="headshot" />
        </div>
      </div>
    </div>
  );
}

export default AboutUsContent;
