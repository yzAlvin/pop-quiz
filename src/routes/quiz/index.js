import style from './style.css';
import { useState } from "preact/hooks";
import { hiragana } from './hiragana'
import { katakana } from './katakana';

const Questions = ({ questionSet }) => {
  const [n, setN] = useState(0)
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState(0);
  const [quizState, setQuizState] = useState("Not End")
  const questions = Object.keys(questionSet)

  const nextQuestion = () => {
    if (answer === questionSet[questions[n]]) setCorrect(correct + 1);
    setN(n + 1);
    setAnswer("");
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (n + 1 === questions.length) {
        setQuizState("End")
      }
      nextQuestion()
    }
  }

  return (
    <div class={style.question}>
      {quizState === "End" ?
        <h3>{correct}/{questions.length}</h3> :
        <>
          <h3>{questions[n]}</h3>
          <input type="text" value={answer} onInput={e => setAnswer(e.target.value)} onKeyDown={handleKeyDown} />
        </>
      }
    </div>
  )
}

String.prototype.toTitleCase = function() {
  return this.charAt(0).toUpperCase() + this.substring(1)
}

const QuizMenu = ({setQuestionSet, checked, setChecked, setQuizStart, sets}) => {
  const setOptions = Object.keys(sets)
  const handleSubmit = (e) => {
    const selectedSets = Object.keys(checked).filter(k => checked[k])
    const set = selectedSets.map(selectedSet => sets[selectedSet])
    setQuestionSet(Object.assign(...set))
    setQuizStart(true)
    e.preventDefault();
  }

  const handleOnChange = (e) => {
    const target = e.target.id
    setChecked({...checked, [target]: !checked[target]})
  }

  return (
    <form onSubmit={handleSubmit}>
      {setOptions.map(set => 
        <>
          <input 
            type="checkbox"
            id={set}
            checked={checked[set]}
            onChange={handleOnChange}
          />
          <label>{set.toTitleCase()}</label>
          <br/>
        </>
      )}
      <input type="submit" value="Submit" />
    </form>
  );
}

const Quiz = () => {
  const sets = {
    "hiragana": hiragana,
    "katakana": katakana
  }
  const [questionSet, setQuestionSet] = useState({})
  const [checked, setChecked] = useState(Object.keys(sets).reduce((allSets, set) => ({...allSets, [set]: false}), {}))
  const [quizStart, setQuizStart] = useState(false)

  return (
    <div class={style.quiz}>
      <h1>Quiz</h1>
      {!quizStart && <QuizMenu setQuestionSet={setQuestionSet} checked={checked} setChecked={setChecked} setQuizStart={setQuizStart} sets={sets} />}
      {quizStart && <Questions questionSet={questionSet} />}
    </div>
  );
}

export default Quiz;
