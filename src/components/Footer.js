import React from 'react'


export default () => (
<footer className='container-fluid black_more' id="contacto">
    <div className='row m-10-hor'>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading amado'>
            <h2 className='font-weight-bold '><p>AMADO DE <span>DIOS</span></p></h2>
          </div>
          <div className='content'>
             <p>La I.E.P. “Amado de Dios” fue autorizada para funcionar por Resolución Ministerial  Nº 000155.</p>
          </div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading title'>
           <span> Contacto:</span>
          </div>
          <div className='content'>
             <div className='link'><p>iepamadodedios@hotmail.com</p></div>
          </div>
          <div className='heading title'>
          <span>  Telefono:</span>
          </div>
          <div className='content'>
             <div className='link'><p>997 467 002</p></div>
          </div>
        </div>
        
      </div>
      

      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading title'>
           <span> Siguenos en:</span>
          </div>

          <div  onClick={()=> window.open("//www.facebook.com/ColegioAmadoDeDios", "_blank")} onKeyDown={()=> window.open("//www.facebook.com/ColegioAmadoDeDios", "_blank")} role="button" tabIndex="0">
            <div className='content'>
            <p>Facebook</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <div className='subfooter'>
      <div className='row m-10-hor'>
        <div className='col-md-6'>
          <div className='content'>© Copyrights 2021 <span className='font-weight-bold'>Amado de Dios</span> Todos los derechos reservados.</div>
        </div>
        <div className='col-md-6'>
          <div className='content-right'>
            Amado de Dios
            <i className="fa fa-heart text-gradient"></i>
            
          </div>
        </div>
      </div>
    </div>
  </footer>
)