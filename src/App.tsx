import React from 'react';
import IButton from './interfaces/button.interface';
import IBook from './interfaces/book.interface';
import IQuestion from './interfaces/question.interface';

import Button from './components/Button/Button';

type MyProps = {
  title?: string,
  text?: string,
  author?: string,
  nextStepEvent?: () => void,
  resultEvent?: () => void

};
type MyState = {
  currentQuestion: number,
  title?: string,
  nextStep?: number,
  target?: number | number[],
  buttons?: IButton[],
  questionsData?: IQuestion[],
  booksData?: IBook[]
};

class App extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentQuestion: 1,
      questionsData: [],
      booksData: []
    };

    this.getBooks = this.getBooks.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  // Put all questions in state

  getQuestions = (response: IQuestion[]) => {
    this.setState({
      questionsData: response
    })
  }

  // Put all books in state

  getBooks = (response: IBook[]) => {
    this.setState({
      booksData: response
    })
  }

  fetchQuestions = () => {
    fetch('/data/questions.json')
      .then(res => res.json())
      .then(result => this.getQuestions(result)
      )
      .catch(error => {
        console.log('Request failed', error)
      })
  }

  fetchBooks = () => {
    fetch('/data/books.json')
      .then(res => res.json())
      .then(result => this.getBooks(result)
      )
      .catch(error => {
        console.log('Request failed', error)
      })
  }

  componentDidMount() {
    this.fetchQuestions();
    this.fetchBooks();
  }

  render() {
    let stateButtons = this.state.buttons;
    let buttons: JSX.Element[] = [];
    let stateBooks = this.state.booksData;
    let books: JSX.Element[] = [];

    stateButtons?.forEach((button, index) => {
      buttons.push(
        <Button
          key={index}
          title={button.title}
          text={button.text}
        ></Button>
      );
    });


    return (
      <div>
        <h1>{this.state.title}</h1>
        {books}
        {buttons}
      </div>
    )
  }
}

export default App;