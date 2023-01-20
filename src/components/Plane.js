import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'


function Plane(){ 
  return (
<>
   <section className="bg-light p-5">
     <Container fluid={true} className="">
         <Row className="">
             <Col lg={6}>
             <h2 class="left-align">BIENVENIDO A</h2>
             <h1 class="left-align">PLAN E</h1>
                    <p class="left-align text-big">Te invitamos a conocer la nueva herramienta financiera de Elemental Constructora.

Plan E te da la posibilidad de ahorrar en metros cuadrados poniendo vos los plazos y la cantidad de unidades que querés comprar, mientras tu inversión crece por la actualización de valores.</p>
             </Col>
             <Col lg={6}>
                 <Container>
                     <Image src="../images/preview_plan_e.png" alt='plan-e' fluid={true} width="500" height="500" className=""></Image>
                 </Container>
             </Col>
         </Row>
     </Container>
   </section>
   <section className="bg-secondary p-5">
       <Container>
          <Row>
              <Col lg={4}>
              <img
            src="../icons/icon1.svg"
            width="300"
            height="150"
            className="d-inline-block align-top"
            alt="Elemental logo"
          />
                SIMPLE Y ACCESIBLE
              </Col>
              <Col lg={4}>
              <img
            src="../icons/icon2.svg"
            width="300"
            height="150"
            className="d-inline-block align-top"
            alt="Elemental logo"
          />
                LIQUIDEZ INMEDIATA
              </Col>
              <Col lg={4}>
              <img
            src="../icons/icon3.svg"
            width="300"
            height="150"
            className="d-inline-block align-top"
            alt="Elemental logo"
          />
                FLEXIBLE
              </Col>
          </Row>
       </Container>
   </section>
   </>
  )
}

export default Plane;