import style from './style.css';
import { useState } from "preact/hooks";
import { hiragana } from './hiragana'

const Question = ({ questionSet }) => {
  const [n, setN] = useState(0)
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState(0);
  const [quizState, setQuizState] = useState("Not End")

  const nextQuestion = () => {
    if (answer === questionSet[n].answer) setCorrect(correct + 1);
    setN((n + 1) % questionSet.length);
    setAnswer("");
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (n + 1 === questionSet.length) {
        setQuizState("End")
      }
      nextQuestion()
    }
  }

  return (
    <div class={style.question}>
      {quizState === "End" ?
        <h3>{correct}/{questionSet.length}</h3> :
        <>
          <h3>{questionSet[n].question}</h3>
          <input type="text" value={answer} onInput={e => setAnswer(e.target.value)} onKeyDown={handleKeyDown} />
        </>
      }
    </div>
  )
};

const Quiz = () => (
  <div class={style.quiz}>
    <h1>Quiz</h1>
    <Question questionSet={hiragana} />
  </div>
);

export default Quiz;
