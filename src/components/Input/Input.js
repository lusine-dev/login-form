import React from 'react';

import './Input.css';

function Input (props) {
   return <input className="loginInput" placeholder={props.placeholder} value={props.value} onChange={props.onChange} type={props.type}/>
}

export default Input;