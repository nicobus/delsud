import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

function Footer (){
  return (
    <div className="bg-dark">
        <Container fluid={true} className="p-4 text-footer">
            <Row>
                <Col md={6}>
                    <Row>
                        <Col md={6}>
                            <img
                                src="../icons/icon-elemental.png"
                                width="80"
                                height="80"
                                className="d-inline-block align-top"
                                alt="Elemental logo"
                            />
                        </Col>
                        <Col md={6}>
                            <div className="left-align">
                                <p>
                                    ELEMENTAL CONSTRUCTORA
                                </p>
                                <p>
                                    Todos los derechos reservados
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>  
                <Col md={2}>
                   VIVIENDAS
                </Col>
                <Col md={2}>
                  UBICACION
                </Col>
                <Col md={2}>
                   CONTACTO
                </Col>
            </Row>   
        </Container>
    </div>
  )
}

export default Footer;
