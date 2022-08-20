import style from './style.css';
import { useState } from "preact/hooks";
import { hiragana, basic_hiragana, dakuten_hiragana } from './hiragana'
import { katakana, basic_katakana, dakuten_katakana } from './katakana';
import { QuizMenu } from './QuizMenu';
import { Questions } from './Questions';

const Quiz = () => {
  const sets = {
    "all hiragana": hiragana,
    "all katakana": katakana,
    "basic hiragana": basic_hiragana,
    "dakuten hiragana": dakuten_hiragana,
    "basic katakana": basic_katakana,
    "dakuten katakana": dakuten_katakana,
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
