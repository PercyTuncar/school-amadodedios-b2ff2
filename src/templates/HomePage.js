import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
     <Slider />
     <div className='homePage'>
          <div  className='col-12 text-center arriba ' >
            <div className='heading'><h1>Nuestra propuesta pedagógica</h1> </div>
                  <div className='propuesta'>
                  <ReadMoreReact   text={"La propuesta pedagógica de La Institución Educativa Privada “Amado de Dios” es: tener como propósito mejorar el nivel de aprendizaje, según los resultados precisados en el diagnóstico que responde a las características, necesidades e intereses de los estudiantes y la implementación del enfoque formatico, Desde este enfoque, la evaluación es un proceso sistemático en el que se recoge y valora información relevante acerca del nivel de  desarrollo de las competencias en cada estudiante, con el fin de contribuir oportunamente su aprendizaje, acción pedagógica expresada en la implementación del Currículo Nacional de la Educación Básica (CNEB) Y EL PCI de la institución. Se plantean los compromisos de gestión escolar, los enfoques transversales, las orientaciones para el proceso de enseñanza y aprendizaje, teorías pedagógicas, las orientaciones pedagógicas para el desarrollo de competencias, los principios psicopedagógicos, los perfiles de los actores, la diversificación curricular, demandas educativas y sistema de evaluación, elementos que guiarán y orientarán el proceso de enseñanza, aprendizaje y la toma de decisiones sobre como mejorar las condiciones de aprendizaje que parten de los saberes y valores de la cultura local y los articulan con nuevos conocimientos."}
                                min={80}
                                ideal={100}
                                max={200}
                                readMoreText="haga clic aquí para leer más..."/>
                  </div>
          </div>
       <div className="aniversarioImg">
         <img src="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/21.jpg?alt=media&token=03fa9b20-28b7-4e13-aedf-875fe1524373" alt='30 años del colegio amado de dios'/>
       </div>
       <ObjetivosPEI/>
     
       <section className='container-fluid'>
        <div className='row m-10-hor valoreshome'>
          <div className='col-12 text-center'>
            <div><span  className='heading'>¿Qué valores practicamos en nuestro trabajo diario?</span></div>
            <div className='row'>
              <div className='col-md-8 mx-auto'>
                <p className='content'>
                Practicamos los valores de 
                responsabilidad, respeto, justicia, solidaridad 
                y superación personal.  <br/>
                <br/>
                Compartimos con todas las instituciones 
                educativas los principios de: ética, 
                equidad, inclusión, democracia, interculturalidad, conciencia
                  ambiental, creatividad e innovación, valores que ayuden a regular la convivencia. 
                </p>
              </div>
            </div>
          </div>
        <ValoresDeLaInstitucion/>
        </div>	
        <div class="acm-stats style-1">
              <ul>
                <li class="stats-asset">
                  <h1 class="stats-item-counter">Año Escolar 2021</h1>
                          <span class="stats-subject"> <a class="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                          Matrícula Abierta 👇 </a>
                          </span>
                          <div className="collapse tarjeta" id="collapseExample">
                            <div className="card card-body">
                            <div className="card card-body">
                            <span className="stats-description">Somos Amadinos, más de 30 años al servicio de la educación. de Tradición y Excelencia Educativa. <br/><br/>
                                          <a href="#contacto"> Contáctenos » 👇</a>
                                          </span>
                            </div>
                            <li class="stats-asset">
                                <h1 class="stats-item-counter"> Realiza Pagos	</h1>
                                <span class="stats-subject">Pensado en su comodidad</span>
                                <a href="https://firebasestorage.googleapis.com/v0/b/amado-de-dios.appspot.com/o/Comunicado%20051-ADD-2020.pdf?alt=media&token=d690fcd2-47ee-4650-9016-a683d56a8535" target="_blank"> Costo, matrícula y pensión 2021 haciendo click aquí </a>
                            </li>
                            </div>
                          </div>
                      </li>
                    </ul>
        </div>		
    </section>
        <MensajeDeLaDirectoa/>
        <Testimony/>
        <Footer />
     </div>
  </Layout>
)
export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
