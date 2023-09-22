import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Vista1 = () => {
  const titleStyles = {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#0077b6',
  };
  const subtitleStyles = {
    fontSize: '20px',
    color: '#0077b6',
  };
  const sectionStyles = {
    height: '150px',
    margin: '20px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const sectionTitleStyles = {
    height:'auto',
    width:'75%',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
  };
  const mediaQueryStyles = {
    '@media (max-width: 768px)': {
      sectionStyles: {
        height: 'auto',
        margin: '10px',
      },
      sectionTitleStyles: {
        width: '90%',
        padding: '5px',
      },
      titleStyles: {
        fontSize: '25px',
      },
      subtitleStyles: {
        fontSize: '18px',
      },
    },
  };
  return (
    <Container style={{display: 'flex', flexDirection: 'column'}}>
        <Row>
            <Col style={{...sectionStyles, ...mediaQueryStyles['@media (max-width: 768px)'].sectionStyles}}>
                <div style={{...sectionTitleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].sectionTitleStyles}}>
                    <h1 style={{...titleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].titleStyles}}>Project's Manager Gan</h1>
                    <p style={{...subtitleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].subtitleStyles}}>Aplicacion web orientada a gestionar y administrar proyectos.</p>
                </div>
            </Col>
        </Row>
        
        <Row style={{marginTop: '20px'}}>
            <Col style={{...sectionStyles, ...mediaQueryStyles['@media (max-width: 768px)'].sectionStyles}}>
                <div style={{...sectionTitleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].sectionTitleStyles}}>
                    <h1 style={{...titleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].titleStyles}}>Objetivo</h1>
                    <p style={{...subtitleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].subtitleStyles}}>Proporcionar una herramienta gráfica y eficaz para la gestion de proyecto divididos por tareas horarios, personal, etc.</p>
                    <p style={{...subtitleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].subtitleStyles}}>Esto con tal de apoyar a la agilización de </p>
                </div>
            </Col>
        </Row>
        
    </Container>
  );
};
export default Vista1;