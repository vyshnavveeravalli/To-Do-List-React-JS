import Todo from "./components/Todo"
const App = () => {

  return (
    <div className="todo">
      <div className="todo-header">To-do list</div>
      <div className="todo-add">
        <input type="text" placeholder="add your text" className="todo-input"/>
        <div className="todo-add-btn">ADD</div>
        <div className="todolist"></div>
      </div>
    </div>
  )
}
export default App