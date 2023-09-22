import React from 'react';
import { Row, Col } from 'react-bootstrap';

const FooterS = () => {
    return (
        <footer style={{backgroundColor: 'black', color: 'white', height: '100px', width: '100%', position: 'fixed', bottom: '0'}}>
            <Row style={{height: '100%', width: '100%'}} xs={2} md={2}>
                <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <a href='/aviso_de_privacidad' className="footer_link" style={{textDecoration: 'none', color: 'white', fontSize: '20px', transition: '0.3s', width:'100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius:'10px'}}>Aviso de Privacidad</a>
                </Col>
                <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <a href='about' className="footer_link" style={{textDecoration: 'none', color: 'white', fontSize: '20px', transition: '0.3s', width:'100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius:'10px'}}>Sobre Nostros</a>
                </Col>
            </Row>
        </footer>
    )
}

export default FooterS;


