import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './background.css'
export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted fondo'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block text-white'>
          <span>Conectate con HORUS | 2023:</span>
        </div>        
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>
                <MDBIcon icon="gem" className="me-3" />
                HORUS PROYECT | 2023
              </h6>
              <p className="text-white">
                Proyecto de Front-End de sistema base para realizar cualquier aplicación
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Productos</h6>
              <p className="text-white">
                <a href='https://github.com/tarsicio/REACT_LARAVEL9/tree/master' 
                  className='text-reset' target="_blank" rel="noreferrer">
                  React Front-End GitHub
                </a>
              </p>
              <p className="text-white">
                <a href='https://github.com/tarsicio/API_REST_LARAVEL_9/tree/master' 
                  className='text-reset' target="_blank" rel="noreferrer">
                  Laravel Back-End GitHub
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Acerca del Autor</h6>
              <p className="text-white">
                <a href='https://www.linkedin.com/in/tarsicioc/' 
                  className='text-reset' target="_blank" rel="noreferrer">
                  Tarsicio Carrizales
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Contacto</h6>              
              <p className="text-white">
                <MDBIcon icon="envelope" className="me-3" />                
                <a className="text-white"  href='mailto:telecom.com.ve@gmail.com'>
                  telecom.com.ve@gmail.com
                </a>
              </p>              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a href='https://www.github.com/tarsicio' target="_blank" rel="noreferrer" className="text-white">
          Tarsicio Carrizales
        </a>
      </div>
    </MDBFooter>
  );
}