import React from "react";
import BasicLayout from "./BasicLayout";

const Todo = React.memo(() => {
  return <BasicLayout withNav={true} />;
});

export default Todo;
