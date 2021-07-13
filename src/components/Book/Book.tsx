import React from 'react'
import IBook from '../../interfaces/book.interface';

function Book(props: IBook) {
    return (
        <div>
            <h2>{props.author}</h2>
            <p>{props.title}</p>
        </div>
    )
}

export default Book;
