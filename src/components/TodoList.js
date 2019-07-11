import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const FakeRadio = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-right: 5px;
  border: 2px solid #003164;
  border-radius: 100%;
`;

const Todos = styled.div`
  display: flex;
  align-items: center;
  max-width: 50%;
  color: #003164;
  padding: 10px 5px;
  border-bottom: 1px solid #ddd;
`;

const TodoList = ({ todos }) => {
  console.log(todos);
  return todos.map((todo, index) => (
    <Todos key={index}>
      <FakeRadio />
      <span>{todo}</span>
    </Todos>
  ));
};

export default connect(state => ({
  todos: state.todo
}))(TodoList);

{
  /* <i class="material-icons">fiber_manual_record</i> */
}
