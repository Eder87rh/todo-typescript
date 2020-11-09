import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateToDoForm from "../components/CreateToDoForm";
import Header from "../components/Header";
import ToDoList from "../components/ToDoList/ToDoList";
import "../styles.css";
import Styles from "./container.module.css";

export const Container: React.FC = () => {
  return (
    <BrowserRouter>
      <main id="main" className={`${Styles.main} light-theme`}>
        <div className={Styles.container}>
          <Header title="Todo App" />
          <Switch>
            <Route exact path="/">
              <ToDoList />
            </Route>
            <Route exact path="/create">
              <CreateToDoForm />
            </Route>
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default Container;
