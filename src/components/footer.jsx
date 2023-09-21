import React from 'react'

const footerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
    height: '100px',
    width: '100%',
    position: 'fixed',
    bottom: '0'
}

const linkStyles = {
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

const FooterS = () => {
    return (
        <footer style={{...footerStyles, width: '100vw'}}>
            <ul style={{listStyleType: 'none', display: 'flex', flexDirection: 'row'}}>
                <li style={{marginRight: '20px'}}><a href='/aviso_de_privacidad' className="footer_link" style={{...linkStyles, width: '100%'}}>Aviso de Privacidad</a></li>
                <li><a href='about' className="footer_link" style={{...linkStyles, width: '100%'}}>Sobre Nostros</a></li>
            </ul>
        </footer>
    )
}

export default FooterS

/*

*/
