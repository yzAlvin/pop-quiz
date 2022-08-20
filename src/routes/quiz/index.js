import style from './style.css';
import { useState } from "preact/hooks";
import { hiragana } from './hiragana'
import { katakana } from './katakana';

const s = {
  "hiragana": hiragana,
  "katakana": katakana
}

const Question = ({ questionSet }) => {
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

const Quiz = () => {
  const [questionSet, setQuestionSet] = useState({})
  const [checked, setChecked] = useState({"hiragana": false, "katakana": false})
  const [quizStart, setQuizStart] = useState(false)
  
  const handleSubmit = (e) => {
    const selectedSets = Object.keys(checked).filter(k => checked[k])
    const set = selectedSets.map(selectedSet => s[selectedSet])
    setQuestionSet(Object.assign(...set))
    setQuizStart(true)
    e.preventDefault();
  }

  const handleOnChange = (e) => {
    const target = e.target.id
    setChecked({...checked, [target]: !checked[target]})
  }

  return (
    <div class={style.quiz}>
      <h1>Quiz</h1>
      {!quizStart && <form onSubmit={handleSubmit}>
        <input 
          type="checkbox"
          id="hiragana"
          checked={checked["hiragana"]}
          onChange={handleOnChange}
        />
        <label>Hiragana</label>
        <br/>
        <input
          type="checkbox"
          id="katakana"
          checked={checked["katakana"]}
          onChange={handleOnChange}
        />
        <label>Katakana</label>
        <br/>
        <input type="submit" value="Submit" />
      </form>}
      {quizStart && <Question questionSet={questionSet} />}
    </div>
  );
}

export default Quiz;
