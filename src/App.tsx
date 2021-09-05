import React, { useEffect, useState } from 'react';
import { useFetchQuestionsData } from "./services/fetchQuestionsData";
import { useFetchBooksData } from "./services/fetchBooksData";
import IButton from './interfaces/button.interface';
import IBook from './interfaces/book.interface';
import IQuestion from './interfaces/question.interface';

import Button from './components/Button/Button';
import Book from './components/Book/Book';

const App: React.FC = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1)
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>()
  const [target, setTarget] = useState<number>()
  const [book, setBook] = useState<IBook>()

  const questionsData = useFetchQuestionsData('/data/questions.json')
  const booksData = useFetchBooksData('/data/books.json')

  const findCurrentQuestion = (questions: IQuestion[], id: number) => {
    if (!questions || !id) {
      return;
    }

    let question = questions?.find((question: IQuestion) => question.id === id)

    return question;
  }

  const goToResult = (books: IBook[], id: number): IBook | undefined => {
    if (!books || !id) {
      return;
    }

    let resultBooks = books?.find((book: IBook) => book.id === id);

    return resultBooks;
  }

  const handleClick = (button: IButton) => {
    if (button.target) {
      setTarget(button.target)
    }

    if (button.nextStep) {
      setCurrentQuestionId(button.nextStep)
      setBook(undefined);

      if (button.target) {
        setTarget(button.target)
      }
    }
  }

  useEffect(() => {
    let question;

    if (questionsData) {
      question = findCurrentQuestion(questionsData, currentQuestionId);
      setCurrentQuestion(question);
    }

  }, [currentQuestionId, questionsData])

  useEffect(() => {
    let book;
    if (booksData && target) {
      book = goToResult(booksData, target);
      setBook(book);
    }
  }, [target])

  return (
    <div>
      <h1>{currentQuestion?.title}</h1>
      {
        <Book
          title={book?.title}
          author={book?.author}
        ></Book>
      }
      {currentQuestion?.buttons?.map((button, index) =>
        <Button
          key={index}
          title={button.title}
          text={button.text}
          clickEvent={() => handleClick(button)}
        ></Button>
      )}
    </div>
  )
}

export default App;