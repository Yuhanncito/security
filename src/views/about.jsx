import React from 'react';

const About = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '80%', margin: 'auto', marginTop: '5%', border: '1px solid black', padding: '20px', boxShadow: '5px 5px 5px grey', borderRadius: '10px'}}>
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', border: '1px solid black', padding: '20px', backgroundColor: '#0072C6', borderRadius: '10px'}}>
    <img src={require('../imgs/gera.jpg')} alt="placeholder" style={{width: '200px', height: '200px', borderRadius: '50%', boxShadow: '5px 5px 5px grey'}} />
    <p style={{fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px', color: 'white', textShadow: '2px 2px 2px grey'}}>Gerardo Olivares Aguilar</p>
    <p style={{fontSize: '1.3rem', color: 'white', textShadow: '2px 2px 2px grey'}}>20211310@uthh.edu.mx</p>
  </div>
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', border: '1px solid black', padding: '20px', backgroundColor: '#00B0F0', borderRadius: '10px'}}>
    <img src={require('../imgs/yu.jpg')} alt="placeholder" style={{width: '200px', height: '200px', borderRadius: '50%', boxShadow: '5px 5px 5px grey'}} />
    <p style={{fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px', color: 'white', textShadow: '2px 2px 2px grey'}}>Gizé Yuhann Martinez Espinosa</p>
    <p style={{fontSize: '1.3rem', color: 'white', textShadow: '2px 2px 2px grey'}}>20211045@uthh.edu.mx</p>
  </div>
</div>
  );
};

export default About;
