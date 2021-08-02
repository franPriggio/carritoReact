import React from 'react';

class ComponenteClase extends React.Component {
    render ()  {
        let nombre = this.props.nombre;

        return <div>
                    <p>Que es clase render señor?</p>
                    <p>Le pase el nombreeeehhh {nombre}</p>
                    <p>Y cursa el curso {this.props.curso}</p>
                </div>
    }
}

export default ComponenteClase;