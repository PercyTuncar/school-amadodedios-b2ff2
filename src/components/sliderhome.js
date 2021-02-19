import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './sliderhome.css'

const content = [
  {
    title: "Bienvenidos a la familia Amadina!",
    description:
      "Somos una institución educativa con 29 años de experiencia brindando un Servicio Educativo que promueve el desarrollo integral y pleno de nuestros estudiantes",
    image: "https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Ni%C3%B1os-levantando-la-mano%202.webp?alt=media&token=47bd1c17-08f7-4832-9451-0e53dc7b5455"
  },
  {
    title: "Nuestra misión institucional",
    description:
      "Lograr que todas y todos los estudiantes de la I.E.P. culminen la escolaridad de los niveles de inicial, primaria y secundaria exitosamente para convertirse en ciudadanos que aporten a la sociedad y forjen un mejor futuro.",
  
    image: "https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/E-studiantes-de-colegio-manos.webp?alt=media&token=4a1c0ad5-8ca9-49c0-aaad-19c50af1d892"
  },
  {
    title: "Nuestra visión compartida",
    description:
      "Ser reconocidos como una IEP que contribuye a que todos nuestros estudiantes desarrollen su potencial desde el nivel inicial hasta el nivel secundario.",
   
    image: "https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/ni%C3%B1os-levantando-la-mano.webp?alt=media&token=ec56a2d3-69be-42d4-84b9-388e5f21591a"
  }
];

export default () => (
  <Slider className="slider-wrapper" autoplay={6000}>
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center`, backgroundSize: '100%' }}
              >
                <div className="inner textSlide">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
               {/*
                     <button onClick={()=> window.open(item.link, "_blank")}>
                     <span>
                       {item.button}
                     </span>
                   </button> 
               */ }
     
                </div>
              </div>
            ))}
        </Slider>
);