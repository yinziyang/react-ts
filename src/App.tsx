import React, { Fragment } from "react";
import TodoList from "./pages/TodoList";

export default function App(): React.ReactElement {
  return (
    <Fragment>
      <TodoList></TodoList>
    </Fragment>
  );
}
