import React, { useRef, useState, useEffect } from "react";

function BURGIR_MAGIC(){
    console.log("CLICK")
    var variable=document.getElementById("BURGIR_CLICK").innerHTML;
    console.log(variable)
    if(document.getElementById("BURGIR_CLICK").innerHTML=="☰"){
       document.getElementById("BURGIR_CLICK").innerHTML="&#9587;"
       document.getElementById("navbar_id").style.display="flex"
       
    }else{
        document.getElementById("BURGIR_CLICK").innerHTML="&#9776;"
        document.getElementById("navbar_id").style.display="none"
    }
}

function NAV_NAVIGATION(){
    document.getElementById("BURGIR_CLICK").innerHTML="&#9776;"
    document.getElementById("navbar_id").style.display="none"
}

//&#9587; BURGIR
export default function App2() {
    useEffect(() => {
        document.title = "Maciej Drzal"
     }, []);
  return (
    <>

        <nav className="NAV_ALL">
        <div class="navbar_item_burgir"> <a href="#" class="navbar_text_BURGIR" id="BURGIR_CLICK" onClick={BURGIR_MAGIC}>&#9776;</a> </div>
        <ul class="navbar_" id="navbar_id">
            <li class="navbar_item"> <a href="#ABOUT_ID" class="navbar_text"  onClick={NAV_NAVIGATION}>ABOUT</a> </li>
            <li class="navbar_item"> <a href="#EDUCATION_ID" class="navbar_text"  onClick={NAV_NAVIGATION}>EDUCATION</a> </li>
            <li class="navbar_item"> <a href="#QUALIFICATIONS_ID" class="navbar_text" onClick={NAV_NAVIGATION}>QUALIFICATIONS</a> </li>
            <li class="navbar_item"> <a href="#PUBLICATIONS_ID" class="navbar_text"  onClick={NAV_NAVIGATION}>PUBLICATIONS</a> </li>
            <li class="navbar_item"> <a href="https://www.linkedin.com/in/maciej-d-422393a0/" onClick={NAV_NAVIGATION}class="navbar_text">CONTACT</a> </li>
           
        </ul>
        </nav>

        <div class="Photo-and-about">

            <div class="COL_FLEX_1">
                <div class="PHOTO_TEXT">
                    <div class="Profile_PIC_CONTAINER">
                        <img src={require ("./data/Profile_Pic.jpg")}class="Profile-Pic"></img>
                    </div>
                    <div class="Photo-Profile-text">
                        <h1 class="Profile-Name">MACIEJ DRZAL</h1>
                        <h3 class="Profile-Name-2">Web Development</h3>
                        <h3 class="Profile-Name-2"> Data Vizualization</h3>
                        <h3 class="Profile-Name-2">Data Science</h3>
                        <h3 class="Profile-Name-2">Analytics</h3>
                
                    </div>
                </div>
            </div>


            <div class="COL_FLEX_1">
                <h1 class="ABOUT_ME_TEXT" id="ABOUT_ID">ABOUT ME</h1>
                <p class="ABOUT_PARAGRAPH">I am a PhD student who really enjoys to code! My research project is focused on multi-omic analysis of the human kidney. My weapon of choice is R, however, i am also comfortable with Python.</p>
                <p class="ABOUT_PARAGRAPH">Apart from machine learning and analitical skills I am capable of deploying models to world wide web using Shiny mixed with other languages and technologies such as CSS, Javascript and HTML</p>
            </div>

        </div>
    </>
  );
}
