
import './App.css';

import Header from './Header';
import Content from './Content';
import TodoList  from './ToDoList';

function App() {

  

  return (
    <div className="App">
      <Header/>
      {/* <Content/> */}
      <h1>My To-Do List</h1>
      <TodoList/>
      


     
    </div>
  );
}

export default App;
