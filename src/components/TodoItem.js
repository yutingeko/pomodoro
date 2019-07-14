import React from "react";
import styled from "styled-components";

const FakeRadio = styled.span`
  position: relative;
  display: inline-block;
  width: ${({ specialStyle }) => (specialStyle ? "1.5rem" : "1rem")};
  height: ${({ specialStyle }) => (specialStyle ? "1.5rem" : "1rem")};
  margin-right: 5px;
  border: 2px solid #003164;
  border-radius: 100%;

  .material-icons {
    font-size: ${({ specialStyle }) => (specialStyle ? "1.5rem" : "1rem")};
  }
`;

const Todos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #003164;
  padding: 10px 5px;
  cursor: pointer;
  border-bottom: ${({ specialStyle }) =>
    specialStyle ? "none" : "1px solid #ddd"};

  span {
    text-decoration: ${({ completed }) =>
      completed ? "line-through" : "none"};
  }

  .todoContent {
    display: inline-flex;
    align-items: center;
  }
`;

const TodoItem = ({
  data: { id, todo, completed },
  completeTodo,
  specialStyle = false,
  moveToFirst
}) => {
  const handleClick = () => {
    completeTodo(id);
  };
  return (
    <Todos completed={completed} specialStyle={specialStyle}>
      <div className="todoContent" onClick={handleClick}>
        <FakeRadio completed={completed} specialStyle={specialStyle}>
          {completed ? <i className="material-icons">done</i> : null}
        </FakeRadio>
        <span>{todo}</span>
      </div>
      {!specialStyle && (
        <i className="material-icons" onClick={() => moveToFirst(id)}>
          play_circle_outline
        </i>
      )}
    </Todos>
  );
};

export default TodoItem;
