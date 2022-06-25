import React, { StrictMode } from "react";
import "./App.css";
// import TaskBlock from "./components/TaskBlock";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TaskBlock from "../src/components/TaskBlock.jsx";
import { rootReducer } from "./Redux/rootReducer";
import ListTasks from "./components/ListTasks";
import { combineReducers } from "redux";
function App() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <div className='App'>
        <TaskBlock />
        <ListTasks />
      </div>
    </Provider>
  );
}

export default App;
