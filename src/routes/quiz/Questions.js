import style from './style.css';
import { useState } from "preact/hooks";

export const Questions = ({ questionSet }) => {
  const [n, setN] = useState(0);
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState(0);
  const [quizState, setQuizState] = useState("Not End");
  const questions = Object.keys(questionSet);

  const nextQuestion = () => {
    if (answer === questionSet[questions[n]])
      setCorrect(correct + 1);
    setN(n + 1);
    setAnswer("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (n + 1 === questions.length) {
        setQuizState("End");
      }
      nextQuestion();
    }
  };

  return (
    <div class={style.questions}>
      {quizState === "End" ?
        <h3>{correct}/{questions.length}</h3> :
        <>
          <h3>{questions[n]}</h3>
          <input type="text" value={answer} onInput={e => setAnswer(e.target.value)} onKeyDown={handleKeyDown} />
        </>}
    </div>
  );
};
