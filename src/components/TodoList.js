import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos = [],
  withoutCompleted,
  completeTodo,
  moveToFirst,
  limit
}) => {
  const renderList = withoutCompleted
    ? todos.filter(item => !item.completed)
    : todos;
  return renderList.map((data, index) => {
    return index < limit ? (
      <TodoItem
        key={data.id}
        data={data}
        completeTodo={completeTodo}
        moveToFirst={moveToFirst}
      />
    ) : null;
  });
};

export default TodoList;
