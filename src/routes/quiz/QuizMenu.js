String.prototype.toTitleCase = function() {
  const title = (word) =>
    word.charAt(0).toUpperCase() + word.substring(1)
  return this.split(" ").map(w => title(w)).join(" ")
}

export const QuizMenu = ({ setQuestionSet, checked, setChecked, setQuizStart, sets }) => {
  const setOptions = Object.keys(sets);
  const handleSubmit = (e) => {
    const selectedSets = Object.keys(checked).filter(k => checked[k]);
    const set = selectedSets.map(selectedSet => sets[selectedSet]);
    setQuestionSet(Object.assign(...set));
    setQuizStart(true);
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    const target = e.target.id;
    setChecked({ ...checked, [target]: !checked[target] });
  };

  return (
    <form onSubmit={handleSubmit}>
      {setOptions.map(set => <>
        <input
          type="checkbox"
          id={set}
          checked={checked[set]}
          onChange={handleOnChange} />
        <label>{set.toTitleCase()}</label>
        <br />
      </>
      )}
      <input type="submit" value="Submit" />
    </form>
  );
};
