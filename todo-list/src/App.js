import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  id = 1; // data가 인풋으로 들어올 때마다 1씩 커질것이다.

  state = {
    input: "",
    // 기본 todo setting
    todos: [],
  };

  // Form 컴포넌트의 onChange에 묶일 이벤트핸들러
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  // Form 컴포넌트의 add button에 묶일 이벤트핸들러
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "", // input은 클릭하여 등록하는 순간 비워준다.
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
      }),
    });
  };

  // enter keypress event handler
  handleKeyPress = (e) => {
    if (e.key === "Enter") this.handleCreate();
  };

  // checked 해제, 설정
  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
  };

  // remove
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;
    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
