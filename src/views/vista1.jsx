import React from 'react';

const Vista1 = () => {
  return (
    <div>
      <div style={{fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center', margin: '2rem'}}>
        <p>Seguridad Informática y Leyes</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <p style={{fontSize: '1.1rem', marginBottom: '1rem'}}>La seguridad informática es un tema muy importante en la actualidad, ya que cada vez más información se maneja en línea. Es por eso que existen leyes que protegen la privacidad y seguridad de los usuarios en internet.</p>
        <p style={{fontSize: '1.1rem'}}>Algunas de estas leyes son:</p>
        <ul style={{fontSize: '1.1rem', listStyleType: 'disc', paddingLeft: '2rem'}}>
          <li>Ley de Protección de Datos Personales</li>
          <li>Ley de Firma Electrónica</li>
          <li>Ley de Delitos Informáticos</li>
        </ul>
      </div>
    </div>
  );
};

export default Vista1;
