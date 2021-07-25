import { useState, useEffect } from 'react'
import IQuestion from '../interfaces/question.interface'

export const useFetchQuestionsData = (url: string) => {
    // const [questionsLoading, setQuestionsLoading] = useState<boolean>(true);
    const [questionsData, setQuestionsData] = useState<IQuestion[]>()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setQuestionsData(result);
            })
            .catch(error => {
                console.log('Request failed', error)
            })
    }, [url])

    if (questionsData) {
        return questionsData;
    }
}