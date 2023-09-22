import { saveAs } from 'file-saver';
const AvisoPrivacidad = () => {

    const downloadPdf = () => {
        saveAs('/views/AvisoPrivacidad.pdf', 'AvisoPrivacidad.pdf');
    };

    return (
        <div style={{marginLeft: '5%', marginRight: '5%'}}>
                <div style={{fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center', margin: '2rem'}}>
                    <p>Aviso de privacidad</p>
                </div>
                <div style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
                    <p>Administradora de Comercios y Franquicias, con domicilio en calle Rayón Oriente No. 303-8 Plaza Robert, colonia Centro, ciudad México, municipio o delegación Tulancingo de Bravo, c.p. 43600, en la entidad de Hidalgo, país México, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>
                </div>
                <div style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
                    <p>¿Para qué fines utilizaremos sus datos personales?</p>
                    <p>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
                    <ul style={{fontSize: '1.1rem', listStyleType: 'disc', paddingLeft: '2rem'}}>
                    </ul>
                </div>
                <div style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
                    <p>De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:</p>
                    <ul style={{fontSize: '1.1rem', listStyleType: 'disc', paddingLeft: '2rem'}}>
                    <li>Cumplimiento de normativas y políticas internas</li>
                    <li>Cumplimiento de obligaciones legales</li>
                    <li>Para verificar su identidad</li>
                    </ul>
                </div>
                <div style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
                    <p>En caso de que no desee que sus datos personales se utilicen para estos fines secundarios, indíquelo a continuación:</p>
                    <p>No consiento que mis datos personales se utilicen para los siguientes fines:</p>
                    <ul style={{fontSize: '1.1rem', listStyleType: 'none', paddingLeft: '1rem'}}>
                    <li>[  ] Cumplimiento de normativas y políticas internas</li>
                    <li>[  ] Cumplimiento de obligaciones legales</li>
                    <li>[  ] Para verificar su identidad</li>
                    </ul>
                    <p>La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.</p>
                </div>
                <div style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
                    <p>¿Dónde puedo consultar el aviso de privacidad integral?</p>
                    <p>Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral en:</p>
                    <p>Comunicación directa, sitios web, puestos de atención al cliente</p>
                </div>
        </div>

        
    );
};


export default AvisoPrivacidad;
