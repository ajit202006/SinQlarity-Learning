import { Routes, Route } from "react-router-dom";
import Todo from './pages/Todo';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

// import ContextTodos from './components/Todos';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todos" element={<Todo />} />
    </Routes>

  )
}

export default App
