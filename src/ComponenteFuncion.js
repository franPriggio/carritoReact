import React from 'react';

const ComponenteFuncion = ({nombre, curso}) => {
    let nomDesdeFuncion = nombre;
    return <div>Eh funcion señor {nomDesdeFuncion} y {curso}</div>;
}

export default ComponenteFuncion;