import React from 'react';

// import config from '../../config';
import fireResorts from '../assets/img/fireresorts.png';


export default function Footer() {
  return (
    <header id="header" style={{textAlign: `center`, marginBottom: `4rem`}}>
      <div style={{marginBottom: `3rem`, textAlign: 'center'}}>
        {/* Fire Resorts LOGO */}
        <img alt="FIRE Resorts" src={fireResorts} style={{width: `25%`}}/>
        {/* Coming Soon */}
        <h5 style={{ color: 'white', backgroundColor: `rgba(0,0,0,0.25)`, letterSpacing:`0.25rem`, width: `fit-content`, padding: `1rem`, marginLeft: `auto`, marginRight: `auto`}}>COMING SOON</h5>
      </div>

      <h2>FIRE Resorts is finally here.</h2>
      <h3>The space for Like Minded Nomads of Color to Meet, Host, Rest & VIBE.</h3>
      
      {/* TODO: take this off when the form and buttons are right */}
      <div style={{display: `none`}}>
        <button style={{marginRight:`1rem`, paddingBottom: `1rem`, paddingLeft: `1rem`, paddingRight: `1rem`}}>SUPPORT US</button>
        <button style={{paddingBottom: `1rem`, paddingLeft: `1rem`, paddingRight: `1rem`}}>STAY UPDATED</button>
      </div>
    </header>
  );
}
