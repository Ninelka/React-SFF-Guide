import React from 'react'
import IButton from '../../interfaces/button.interface';

function Button(props: IButton) {
    return (
        <button onClick={props.clickEvent}>
            {props.title}
            {props.text}
        </button>
    )
}

export default Button;