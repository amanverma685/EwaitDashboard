import React, { useState, useEffect } from 'react';
import {default as Select2 } from 'react-select';

const Select = ({date, name, onNewValue = () => {}, onError = () => {}, options = [], rules = {}, required, defaultValue}) => {
    const [error, setError] = useState("");
    const [label, setLabel] = useState("");
    const [image, setImage] = useState("");
    const onNewSelectValue = (event) => {
        setLabel(event?.label)
        setImage(event?.itemImage)
        onNewValue({
            name: name,
            value: event.value,
            label: label,
            date: new Date(date),
            image: image ? image : ""
        })
        if (rules?.required && event.value.length === 0) {
            setError(name + ' field is required')
            onError(name + ' field is required')
        }
        else{
            setError("")
            onError("")
        }
    }
    return (
        <Select2
            instanceId={name}
            className="font-montserrat text-sm mt-2 cursor-pointer"
            autoFocus={false}
            defaultValue={defaultValue}
            required={required}
            placeholder="Select..."
            onChange={onNewSelectValue}
            options={options}
        />
    );
}

export default Select;