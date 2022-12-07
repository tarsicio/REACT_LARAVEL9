import React from 'react';

function Footer(){
  let regularDiv = {
    backgroundColor: "#1c8ef9",
    borderTop: "2px solid white",
    textAlign: "center",
    padding: "30px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%",
}
let wrapperDiv = {
  display: 'block',
  padding: '30px',
  height: '40px',
  width: '100%',
}
    return (
    <div className='container'>
      <div style={{height: "200vh"}}>
        <div style={wrapperDiv} />
        <div style={regularDiv}>
      <footer className=''>
        <div className='col-md-4 d-flex align-items-center'>
          <a
            href='/'
            className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'
          >
            <svg className='bi' width={30} height={24}>
              <use xlinkHref='#bootstrap' />
            </svg>
          </a>
          <span className=''>© 2023 HORUS, Tarsicio Carrizales</span>
        </div>
        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <a className='text-muted' href='/'>
              <svg className='bi' width={24} height={24}>
                <use xlinkHref='#twitter' />
              </svg>
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href='/'>
              <svg className='bi' width={24} height={24}>
                <use xlinkHref='#instagram' />
              </svg>
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href='/'>
              <svg className='bi' width={24} height={24}>
                <use xlinkHref='#facebook' />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
      </div>
      </div>
    </div>
  );
}
export default Footer;