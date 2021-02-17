import React from 'react';
import { Link } from '@reach/router';
import posed from 'react-pose';
import Navigation from '../components/Nav'
import Footer from '../components/Footer'
import './nosotros.css'

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const style={
  textAlign:'center',
  marginTop:'50px'
}
const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 }
});


export default () => (

<ListContainer>

  <Navigation/>
  <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Ni%C3%B1os-estudiando.webp?alt=media&token=c118c9af-2214-4ced-901c-0f3e9066176f'})`}}></Item>
<div className="subtitlebanner">
  <div className='container-fluid'>
    <div className='row m-10-hor'>
        <div className='col-md-6'>
            <h1>¿Quiénes Somos? </h1>
        </div>
    </div>
  </div> 
</div>
   
<Item className='container-fluid black insigniaNosotros'>
  <div className='row m-10-hor nosotrosTexto'>
      <div className='col-md-5'>
          <div><span  className='subheading'>BIENVENIDOS A LA FAMILIA</span></div>
            <div><span  className='heading'> AMADINA!</span></div>
              <div className='col-md-10'>
              <img src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/insignia-min.webp?alt=media&token=8fc185f6-3835-4e32-95c5-49fe66418f74' alt='imgbanner' className='w-100 border-radius'/>
              </div>
      </div>
      <div className='col-md-7'>
        <div className='content'>
             <p> Somos una institución educativa con 29 años de experiencia brindando 
              un Servicio Educativo que promueve el desarrollo integral y pleno de
              nuestros estudiantes, Buscamos formar personas autónomas y 
              dialogantes, que aprendan a pensar críticamente, desarrollen 
              su sensibilidad, dando énfasis en la formación de valores y 
              en educación ciudadana para que pongan en ejercicio sus 
              deberes y derechos convirtiéndolos en agentes de cambio 
              para una sociedad más justa.</p>
        </div>
        <div className='content'>
           <p>
           Contamos con una plana de docentes calificados, así como un Dpto. 
            Psicopedagógico, Talleres como Taekwondo, Francés en suma, enfocados
             en proporcionar a nuestros estudiantes una educación integral y en
              desarrollar sus potencialidades. Todo esto, sin dejar de lado
               una formación integral que fortalezca los aprendizajes 
               relacionados con el arte y la cultura, así como la práctica 
               de una educación física orientada hacia la salud y a disciplina 
               que se adquiere con la práctica del Taekwondo, respetando siempre 
               las características de los estudiantes desde una perspectiva
                intercultural, ambiental e inclusiva.
           </p>
        </div>
      </div>
  </div>
</Item>

  <section className='container-fluid pt-0'>
        <div className='row m-10-hor'>
          <div className="col-md-6 px-0">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/graduacion-de-colegio.webp?alt=media&token=232a3f70-f568-40b2-a687-bc9367cf0f80" className="imgslickz" alt="#"/>
          </div>
          <div className="col-md-6 centered p-md-5 pt-5">
            <div>
              <div className="subheading">Nuestra misión institucional</div>
              <div className="heading">
              ¿Cuál es nuestra razón?
              </div>
              <p className="mt-3">
              Lograr que todas y todos los estudiantes de la I.E.P. culminen 
              la escolaridad de los niveles de inicial, primaria y 
              secundaria, afiancen los aprendizajes establecidos en el 
              currículo nacional y la propuesta pedagógica de la I.E.P. 
              y alcancen su desarrollo integral en espacios 
              seguros, inclusivos, de sana convivencia y libres 
              de violencia a fin de potencializar sus habilidades 
              para la vida y convertirlos en agente de cambio para la sociedad. 
              </p>
            </div>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5 pb-5">
            <div>
              <div className="subheading">Nuestra visión compartida</div>
              <div className="heading">
              ¿A dónde nos gustaría llegar?
              </div>
              <p className="mt-3">
              Ser reconocidos como una IEP que contribuye a que todos
               nuestros estudiantes desarrollen su potencial
                desde el nivel inicial hasta el nivel secundario, logrando 
                no solo que accedan al mundo letrado, sino que manejen
                 en un nivel intermedio otro idioma, resuelven 
                 problemas, practican valores, saben seguir 
                 aprendiendo, se asumen como ciudadanos con derechos 
                 y responsabilidades, logrando con éxito su proyecto 
                 de vida y se conviertan en agentes de cambio que
                  contribuyen al desarrollo de sus familias, comunidades y 
                  del país, combinando su capital cultural y natural; y 
                  adaptándose a los diversos avances mundiales en concordancia 
                  con el perfil de egreso del CNEB y el Currículo Nacional, buscando 
                  responder a las exigencias de un mundo globalizado.
              </p>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Profesor-en-clases.webp?alt=media&token=e8e21434-803a-42c3-b90d-b0fa5ef777a4" className="imgslickz" alt="#"/>
          </div>
        </div>
  </section>
<section>
  <div className="videos">
          <video width="550" height="auto" controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Videos%2Fvideo%20amado%20de%20dios.mp4?alt=media&token=2fe3c72b-827b-4eaa-a2fe-d0be279efc6e" type="video/mp4"/>
            Your browser does not support the video tag.
            <track default
                kind="captions"
                srclang="es"
                src="#" />
          </video> 

  </div>
  <div className='col-md-12 pl-md-5 center' style={style}>
    <h4>Ver nuestra galería de fotos</h4>
        <div class="btn">
          <Link className='link' to="/galeria"> <span>Click aquí</span></Link>
        </div>
  </div>
</section>

<Footer/>
</ListContainer>
);