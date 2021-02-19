import React from "react";
import posed from 'react-pose';
import Navigation from '../components/Nav'
import Footer from '../components/Footer'

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 }
});

const style={
  textAlign:'center',
  marginTop:'50px'
}


export default () => {

  return (
    <ListContainer>
         <Navigation/>
      <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Profesor-en-clases.webp?alt=media&token=e8e21434-803a-42c3-b90d-b0fa5ef777a4'})`}}>
        <div className='mainbreadcumb'>
        
        </div>
      </Item>
      <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-6'>
                <h1>Libro de reclamaciones</h1>
              </div>
              <div className='col-md-6'>
              
              </div>
            </div>
          </div>
      <Item className='container-fluid'>
        <div className='row m-10-hor'>

          <div className='col-md-6'>
            <div className="form-side">
              <h2>INICIAL y PRIMARIA</h2>
              <p>Av Aviación Mz B Lt 26 Urb Papa Juan XXIII San Borja</p>
              <ul>
                <li>RD de funcionamiento nivel Inicial N° 000482</li>
                <li>RD de funcionamiento nivel Primaria N° 00155</li>
              </ul>
                <div class="btn" onClick={()=> window.open("//forms.gle/pBZk3XCLTpbPfWB26", "_blank")}  onKeyDown={"form"}  role="button" tabIndex="0">
                  <span>Ver libro de reclamaciones</span>
                </div>
            </div>
          </div>

          <div className='col-md-6 pl-md-5'>
          <div className="form-side">
              <h2>SECUNDARIA</h2>
              <p>Av Aviación Mz B Lt 6 Urb Papa Juan XXIII San Borja</p>
              <ul>
                <li>RD de funcionamiento nivel Secundaria N° 00155 </li>
              </ul>
              <div class="btn" onClick={()=> window.open("//forms.gle/pBZk3XCLTpbPfWB26", "_blank")}  onKeyDown={"form"}  role="button" tabIndex="0">
                  <span>Ver libro de reclamaciones</span>
                </div>
            </div>
          </div>
        </div>
        <div className='col-md-12 pl-md-5 center' style={style}>
        <h4>Más información </h4>
        <p>Señor padre de familia los reportes serán respondidos en la brevedad 
          posible con la finalidad de hacer prevalecer el
          bienestar de toda la comunidad Amadina. </p>
        </div>
      </Item>

    <Footer/>
    </ListContainer>
  );
};