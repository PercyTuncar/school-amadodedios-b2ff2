import React from 'react';
import GalleryAmadoDeDios from '../components/GalleryAmadoDeDios';
import Navigation from '../components/Nav'
import Footer from '../components/Footer'

export default () => {    
    return (
      <>    
        <Navigation/>
            <div style={{marginTop: '50px'}}>
            <GalleryAmadoDeDios />
            </div>
        <Footer/>
      </>        
    )    
}