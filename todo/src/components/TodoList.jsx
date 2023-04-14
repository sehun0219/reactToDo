const TodoList = ({ todoList, isDoneChangeHandler, removeTodoHandler }) => {
  return (
    <div className="list">
      {todoList.map((todoItem) => {
        return (
          <div key={todoItem.id}>
            <input
              type="checkbox"
              checked={todoItem.isDone}
              onChange={() => {
                isDoneChangeHandler(todoItem.id);
              }}
            />
            <p>{todoItem.title}</p>
            <button
              onClick={() => {
                removeTodoHandler(todoItem.id);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
