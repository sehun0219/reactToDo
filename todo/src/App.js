import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
// const testDom = document.getElementsByTagName("div")[0];
// testDom.addEventListener(
//   ("click",
//   () => {
//     console.log("hello");
//   })
// );
// jsx
function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = () => {
    const newTodoList = [
      ...todoList,
      {
        title: inputText,
        isDone: false,
        id: todoList.length + 1,
      },
    ];
    setTodoList(newTodoList);
    setInputText("");
  };

  const removeTodoHandler = (id) => {
    const filteredTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(filteredTodoList);
  };
  const isDoneChangeHandler = (id) => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      } else {
        return item;
      }
    });
    setTodoList(updatedTodoList);
  };
  // 리액트에서는 최대한 document에 직접접근을 하지 않는다
  // 왜냐? 리액트는 virtual dom을 사용하기 때문에

  useEffect(() => {
    // useEffect 배워보기
    console.log("hello");
  }, []);

  return (
    <div>
      <h1>TODO</h1>
      {/* <div>{inputText}</div> */}
      <div>
        <input
          value={inputText}
          type="text"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button onClick={addTodoHandler}>등록</button>
        <TodoList
          todoList={todoList}
          isDoneChangeHandler={isDoneChangeHandler}
          removeTodoHandler={removeTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;
