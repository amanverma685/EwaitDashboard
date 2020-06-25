import React, { useState, useEffect } from 'react';

const Pure = ({options, name, onNewValue}) => {
    const [selected, setSelected] = useState("");
    useEffect(() => {
        onNewValue({
            name: name,
            value: selected
        });
    },[selected])
    return (
        <div className="mt-2">
            {options?.map(({id, value, label},index) => <span key={id} className="block font-montserrat font-medium text-sm mt-1 ml-4"><input checked={index === 0 ? true : false} className="mr-2" type="radio" onChange={(e) => setSelected(e.target.value)} name={name} value={value}/>{label}</span>)}
        </div>
    );
}

export default Pure;