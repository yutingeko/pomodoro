import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addTodo } from "../reducers/todoReducer";

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  font-size: 16px;
  font-style: italic;
  padding: 10px;
  width: 25rem;
  border: none;
  outline: none;

  &::placeholder {
    color: #ff4384;
  }
`;

const Add = styled.span`
  position: absolute;
  right: 8px;
  top: 6px;
  padding: 2px;
  color: #ff4384;
  cursor: pointer;

  &:hover {
    background: #efefef;
    border-radius: 100%;
  }
`;

const TodoInput = React.memo(({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const handleAddTodo = e => {
    if (!todo) return;
    const isEnter = e.keyCode === 13;
    if (isEnter || e.target.tagName === "I") {
      console.log(addTodo);
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="ADD A NEW MISSION…"
        value={todo}
        onChange={handleChange}
        onKeyDown={handleAddTodo}
      />
      <Add onClick={handleAddTodo}>
        <i className="material-icons">add</i>
      </Add>
    </Container>
  );
});

export default connect(
  null,
  {
    addTodo
  }
)(TodoInput);
