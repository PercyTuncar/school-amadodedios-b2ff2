import React from 'react';
import { Link } from '@reach/router';
import './ValoresDeLaInstitucion.css'

export default () => (
  <section className='container-fluid'>
        <div className='col-md-12'>

          <div className='col-md-6 insignia derecha'>
            <img src='https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/insignia-min.webp?alt=media&token=8fc185f6-3835-4e32-95c5-49fe66418f74' alt='imgbanner' className='w-100'/>
          </div>
          <div className='col-md-6 derecha'>
        
              <div className="subheading valoressubheading" >
                Valores de la institución educativa.
              </div>
              <div className="heading">
                Amado de Dios __
              </div>
                <ul>
                  <li>Responsabilidad</li>
                  <li>Respeto</li>
                  <li>Justicia</li>
                  <li>Solidaridad</li>
                  <li>Superación personal</li>
                </ul>
              <Link className='btn' to="/about">
                <span>Sobre nosotros</span>
              </Link>
            
          </div>
          
        </div>
    </section>
);