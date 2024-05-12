import React from "react";
import "./Homepage.css";
import Hero from "../Hero.js";
import AboutUsContent from "../AboutUsContent.js";
function HomePage(){
    //Home page will contain a hero (top part) and the content page (bottom part)
    return(
        <>
        <Hero/>
        <AboutUsContent/>
        </>
    );
}
export default HomePage;