import React, { useRef, useState, useEffect } from "react";

import PUBS from "./data/PUBLICATIONS.json";



export default function PUBLICATIONS() {

    let PUBS = require('./data/PUBLICATIONS.json');
    return (
    <>
        <div className="PUBLICATIONS-INTRO" id="PUBLICATIONS_ID">PUBLICATIONS</div>
            <div className="publications_slider">
                {PUBS.ALL.map (THINGS =>(
                    <>
                    <h1 className="PUBLICATIONS_TITLE">{THINGS.TITLE}</h1>
                    <h2 className="PUBLICATIONS_SECRIPTION">{THINGS.Description}</h2>
                    </>
                    
                ))}
            </div>
    </>
    );
  }
  