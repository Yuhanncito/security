import React from 'react';
import './component.css';
import { Row, Col } from 'react-bootstrap';

const FooterS = () => {
    return (
        <footer style={{backgroundColor: 'black', color: 'white', height: '100px', width: '100%', position: 'fixed', bottom: '0'}}>
            <Row className='cositas' xs={2} md={2}>
                <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <a className='footer_link' style={footerLink} href='/aviso_de_privacidad' >Aviso de Privacidad</a>
                </Col>
                <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <a href='about' style={footerLink} className='footer_link'>Sobre Nostros</a>
                </Col>
            </Row>
        </footer>
    )
}

const footerLink = {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px',
        transition: '0.3s',
        width:'100%',
        height:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:'10px'
    }

export default FooterS;


