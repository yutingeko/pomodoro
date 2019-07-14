import React from "react";
import { connect } from 'react-redux';
import BasicLayout from "./BasicLayout";
import TodoInput from "./TodoInput";
import Section from "./Section";
import TodoList from "./TodoList";
import { completeTodo } from "../reducers/todoReducer";

const Todo = React.memo(({
  todos,
  completeTodo,
}) => {
  return (
    <BasicLayout withNav={true}>
        <TodoInput/>
        <Section title="TO-DO" toggle={true}>
          <TodoList
            todos={todos.filter((item) => !item.completed)}
            completeTodo={completeTodo}
            subPage={true}
          />
        </Section>
        <Section title="DONE" toggle={true}>
          <TodoList
            todos={todos.filter((item) => item.completed)}
            completeTodo={completeTodo}
            subPage={true}
          />
        </Section>
    </BasicLayout>
  );
});

export default connect(
  state => ({
    todos: state.todo
  }),
  {
    completeTodo
  }
)(Todo);
