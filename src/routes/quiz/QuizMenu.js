import style from "./style.css";

String.prototype.toTitleCase = function () {
  const title = (word) => word.charAt(0).toUpperCase() + word.substring(1);
  return this.split(" ")
    .map((w) => title(w))
    .join(" ");
};

export const QuizMenu = ({
  setQuestionSet,
  checked,
  setChecked,
  setQuizStart,
  sets,
}) => {
  const setOptions = Object.keys(sets);
  const handleSubmit = (e) => {
    const selectedSets = Object.keys(checked).filter((k) => checked[k]);
    const set = selectedSets.map((selectedSet) => sets[selectedSet]);
    setQuestionSet(Object.assign(...set));
    setQuizStart(true);
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    const target = e.target.id;
    setChecked({ ...checked, [target]: !checked[target] });
  };

  return (
    <form onSubmit={handleSubmit} class={style.quiz_menu}>
      {setOptions.map((set) => (
        <div class={style.quiz_menu_option}>
          <input
            type="checkbox"
            id={set}
            checked={checked[set]}
            onChange={handleOnChange}
          />
          <label id={set} onClick={handleOnChange}>
            {set.toTitleCase()}
          </label>
          <br />
        </div>
      ))}
      <input type="submit" value="Start Quiz!" />
    </form>
  );
};
