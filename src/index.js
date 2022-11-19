import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import "./styles.css"
import "./App.css"
import EDUCATION from './EDUCATION';
import reportWebVitals from './reportWebVitals';
import App2 from './PROFILE';
import QUALIFICATIONS from './QUALIFICATIONS';
import PUBLICATIONS from './PUBLICATIONS';
import CONTACT_ME from './CONTACT';


const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>
    <div className='MAIN_DIV'>
    <App2/>
    <EDUCATION/>
    <QUALIFICATIONS/>
    <PUBLICATIONS/>
    <CONTACT_ME/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
