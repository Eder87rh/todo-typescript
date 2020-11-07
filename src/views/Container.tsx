import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateToDoForm from '../components/CreateToDoForm';
import Header from '../components/Header';
import ToDoList from '../components/ToDoList/ToDoList';

export const Container: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
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
    </BrowserRouter>
  );
};

export default Container;