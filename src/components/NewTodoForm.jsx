const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <label>
      <input
        placeholer='new todo'
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button onClick={handleAction}>Добавить</button>
    </label>
  );
};

export default NewTodoForm;
