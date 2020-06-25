import React from 'react';
import Pure from './pure';


const Radio = ({options, name, onNewValue}) => {
    return <Pure options={options} name={name} onNewValue={onNewValue}/>
}

export default Radio;
