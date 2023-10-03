import React from 'react';

import './Button.css';

function Button (props) {
    return <button onClick={props.onClick} type="button" className = "login-button">{props.children}</button>
}

export default Button;