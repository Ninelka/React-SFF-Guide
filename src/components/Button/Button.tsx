import React from 'react'
import IButton from '../../interfaces/button.interface';

function Button(props: IButton) {
    console.log(props)
    return (
        <button>
            {props.title}
        </button>
    )
}

export default Button;