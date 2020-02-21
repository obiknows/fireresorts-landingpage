import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';
import SupportUs from '../components/SupportUs';

var settings = {
  images: [
    { url: require('../assets/images/img-1.jpg'), position: 'center' },
    { url: require('../assets/images/img-2.jpg'), position: 'center' },
    { url: require('../assets/images/img-3.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const IndexPage = () => (
  <Layout>
    <Header />

    <SupportUs />

    {/* WHAT IS FIRE? */}
    {/* TODO: finish and add this section in using the ul element from here: https://tina-starter-grande.netlify.com/ */}
    {/* <div style={{textAlign: `center`, marginBottom: `1rem`}}>
      <h2>What does FIRE stand for?</h2>
    </div> */}

    
    {/* TODO: add this back once, HTTPS is up and all good */}
    {/* LEAVE US YOUR INFO */}
    {/* <div style={{textAlign: `center`, marginBottom: `0.5rem`}}>
      <h2>Stay in The Loop</h2>
    </div>
    <EmailForm style={{alignSelf: 'center'}}/> */}
    
    {/* CHECK THE PROGRESS - PHOTOS */}
    
    <Footer />
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;
