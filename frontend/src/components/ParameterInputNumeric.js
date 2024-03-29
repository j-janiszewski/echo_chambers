import React from 'react';
import '../styles/ParameterInputNumeric.scss'

const ParameterInputNumeric = (props) => (
    <div className="ParameterInputNumeric">
        <div className="label">{props.label}</div>
        <input type="number" value={props.value} onChange={props.handleOnChange} min={props.min} max={props.max}></input>
    </div>
)


export default ParameterInputNumeric;
