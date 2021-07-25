import { useState, useEffect } from 'react'
import IBook from '../interfaces/book.interface';

export const useFetchBooksData = (url: string) => {
    // const [booksLoading, setBooksLoading] = useState<boolean>(true);
    const [booksData, setBooksData] = useState<IBook[]>();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setBooksData(result);
            })
            .catch(error => {
                console.log('Request failed', error)
            })
    }, [url])

    if (booksData) {
        return booksData;
    }
}