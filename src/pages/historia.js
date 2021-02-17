import React from 'react';
import posed from 'react-pose';
import Navigation from '../components/Nav'
import Footer from '../components/Footer'
import './historia.css'

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 }
});

const milagros = {
  'color':'#FDD377'
}
const fundador = {
  'width':'300px',
  'padding':'30px'
}
const mainfaunder = {
  'display':'inlineBlock'
}
export default () => (
<ListContainer>
<Navigation/>
  <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Alumnos%2FCOlegio-amado-de-dios-footo.jpg?alt=media&token=d80defff-3605-42c4-80b9-124c2f8546bd'})`}}></Item>
    <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Historia</h1>
          </div>
        </div>
    </div>
  <section className='container-fluid historia'>
        <div className='row m-10-hor'>
          <div className='col-md-12 centered fotos'>
            <div>
              <div className="subheading">   Reseña histórica del  </div>
              <div className="heading"> CEGNE Amado de Dios </div>
                <ul>
                <div style={mainfaunder} >
                <img style={fundador} src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/fundador-amado-de-dios.jpeg?alt=media&token=01532b84-bedf-464e-92c4-ed62f0bf0946" alt="fundador" class="responsive"/> 
                <img style={fundador} src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/insignia-min.webp?alt=media&token=8fc185f6-3835-4e32-95c5-49fe66418f74" alt="insignia" class="responsive"/> 
               </div> 

La I.E.P.” Amado de Dios” es una institución fundada e implementada en 1991, por el promotor y director, sr. Florencio Amado Dávalos Calderón. Tiene como sede dos locales, uno en la Av. Aviación B-6 Juan XXIII, San Borja, donde funciona el nivel secundario y otro en la Av. Aviación B-26 Juan XXIII, San Borja, donde funcionan los niveles de inicial y primaria.
<br/>
<br/>
La I.E.P. “Amado de Dios” fue autorizada para funcionar por Resolución Ministerial  Nº 000155. 

Nuestra institución es una entidad privada y de enseñanza mixta. Comprende los niveles de inicial, primaria y secundaria en el turno de la mañana. 
<br/>
<br/>
Buscamos formar personas autónomas y dialogantes, que aprendan a pensar críticamente, desarrollen su sensibilidad, dando énfasis en la formación de valores y en educación ciudadana para que pongan en ejercicio sus deberes y derechos convirtiéndolos en agentes de cambio para una sociedad más justa.

El aprendizaje de idiomas extranjeros con un enfoque comunicativo, tanto en el idioma inglés como el francés así como el uso de la tecnología moderna, TICs, y de comunicación, son instrumentos indispensables para lograr una preparación de calidad, adecuada conscientemente a un mercado laboral actual y comprometida con el mejoramiento del entorno, en busca del desarrollo sostenible.
<br/>
<br/>
Todo esto, sin dejar de lado una formación integral que fortalezca los aprendizajes relacionados con el arte y la cultura, así como la práctica de una educación física orientada hacia la salud y a disciplina que se adquiere con la práctica del Tae kwon do, respetando siempre las características de los estudiantes desde una perspectiva intercultural, ambiental e inclusiva.
                </ul>
            </div>
          </div>
        </div>
</section>

<section className="srmilagros">
    <div>
        <h1 style={milagros}>  Nuestro Santo Patrón Señor de los Milagros</h1>
        <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/sdlm%20maado%20de%20dios.jpg?alt=media&token=6c67d3fa-f25d-4827-921c-7e4e1d3e294f" alt="Nature" class="responsive"/> 
    </div>
    <div>
        <h1 style={milagros}>Oración al Señor de los Milagros</h1>
        <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/WhatsApp%20Image%202020-12-01%20at%205.01.34%20PM.jpeg?alt=media&token=c121d447-bf26-444d-9175-7e236f933fb6" alt="Nature" class="responsive"/> 
   </div>
</section>

  <section className='container-fluid black_more'>
      <div className='row m-10-hor'>
        <div className='col-md-3 slickteam'>
          <div className='slick-slide slick-col'>
            <div>
              <div className='itm'>
              <div className='bg'>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/foto-dos-fundador.jpeg?alt=media&token=048c5779-e7e8-4a51-ba16-ff0fa58ef6f6"
                  className="img-fluid"
                  alt="Imageteam"
                />
              </div>
              <div className='desc'>
                <div className='name'>Amado de Dios</div>
                <div className='title'>Fundador</div>
              </div>
              <div className='icon'>
                 <span onClick={()=> window.open("//facebook.com/ColegioAmadoDeDios", "_blank")} onKeyDown={"f"}  role="button" tabIndex="0">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </span>
            
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-3 slickteam'>
          <div className='slick-slide slick-col'>
            <div>
              <div className='itm'>
              <div className='bg'>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/directora-colegio-amado-de-dios(1).jpeg?alt=media&token=e8351f66-402e-4f9f-86ba-d56ffccad5a5"
                  className="img-fluid"
                  alt="Imageteam"
                />
              </div>
              <div className='desc'>
                <div className='name'>Amado de Dios</div>
                <div className='title'>Directora</div>
              </div>
              <div className='icon'>
                 <span onClick={()=> window.open("//facebook.com/ColegioAmadoDeDios", "_blank")} onKeyDown={"fa"}  role="button" tabIndex="0">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </span>
              
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-3 slickteam'>
          <div className='slick-slide slick-col'>
            <div>
              <div className='itm'>
              <div className='bg'>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/foto%20de%201er%20local%20amado%20de%20dios%20colegio.jpg?alt=media&token=aa9ee4d9-dee1-4f5d-83ae-074a378ef1e1"
                  className="img-fluid"
                  alt="Imageteam"
                />
              </div>
              <div className='desc'>
                <div className='name'>Amado de Dios</div>
                <div className='title'>Av Aviación Mz B Lt 26 Urb Papa Juan XXIII San Borja</div>
              </div>
              <div className='icon'>
                 <span onClick={()=> window.open("//facebook.com/ColegioAmadoDeDios", "_blank")} onKeyDown={"f"}  role="button" tabIndex="0">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </span>
           
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-3 slickteam'>
          <div className='slick-slide slick-col'>
            <div>
              <div className='itm'>
              <div className='bg'>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/foto%20del%202do%20local%20amado%20de%20dios%20colegio.jpg?alt=media&token=c8cc5a8f-40d6-4132-9057-a7744de96733"
                  className="img-fluid"
                  alt="Imageteam"
                />
              </div>
              <div className='desc'>
                <div className='name'>Amado de Dios</div>
                <div className='title'>Av Aviación Mz B Lt 6 Urb Papa Juan XXIII San Borja</div>
              </div>
              <div className='icon'>
                 <span onClick={()=> window.open("//facebook.com/ColegioAmadoDeDios", "_blank")} onKeyDown={"f"}  role="button" tabIndex="0">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </span>
                
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  </section>

  <Footer/>
</ListContainer>

);