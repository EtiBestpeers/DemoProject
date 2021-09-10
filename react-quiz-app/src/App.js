import axios from "axios";
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';

function App() {

  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);


  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url(./ques1.png)' }}>
        <Header />
        <switch>
          <Route path='/' exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path='/quiz' exact>
            <Quiz
            name={name}
            questions={questions}
            score={score}
            setscore={setScore}
            setQuestions={setQuestions} />
          </Route>
          <Route path='/result' exact>
            <Result />
          </Route>
        </switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
