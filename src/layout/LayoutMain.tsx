import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';

function LayoutMain(){
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>My App</Navbar.Brand>
          <Nav className='ml-auto' activeKey='/'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col md='3'>
            {/* sidebar */}
          </Col>
          <Col md='9'>
            {/* content */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LayoutMain;