import React from 'react'

const headerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '68px',
    backgroundColor: '#0077b6'
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

const container = {
    marginRight: '20px',
    width: '17%',
    height:'70%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}

const Headers = () => {
    return (
        <header style={headerStyles}>
            <div style={container} className='container_Footer'>
                <a href="/" className="hover" style={linkStyles}>Inicio</a>
            </div>
            <div style={container} className='container_Footer'>
                <a href="/about" className="hover" style={linkStyles}>Acerca de</a>
            </div>
        </header>
        
    )
}

export default Headers

