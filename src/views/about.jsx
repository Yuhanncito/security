import React from 'react';

const About = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '60%', margin: 'auto', marginTop: '5%'}}>
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%'}}>
    <img src="https://via.placeholder.com/150" alt="placeholder" style={{width: '100px', height: '100px', borderRadius: '50%'}} />
    <p style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Gerardo Olivares Aguilar</p>
    <p style={{fontSize: '1.1rem'}}>20211310@uthh.edu.mx</p>
  </div>
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%'}}>
    <img src="https://via.placeholder.com/150" alt="placeholder" style={{width: '100px', height: '100px', borderRadius: '50%'}} />
    <p style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Gizé Yuhann Martinez Espinosa</p>
    <p style={{fontSize: '1.1rem'}}>20211045uthh.edu.mx</p>
  </div>
</div>
  );
};

export default About;