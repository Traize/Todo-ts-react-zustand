import './App.css'
import AddTodo from './components/add-todo/AddTodo'
// import TodoCategory from './components/todo-category/TodoCategory'
import TodoList from './components/todo-list/TodoList'

function App() {
  return (
    <>
      <h1>Todo List</h1>
      {/* <TodoCategory/> */}
      <TodoList />
      <AddTodo />
    </>
  )
}

export default App
