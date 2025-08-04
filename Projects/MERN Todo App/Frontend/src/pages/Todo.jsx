import { useEffect } from 'react'
import Header from '../components/Header'
import Todos from '../components/Todos'
import { useNavigate } from 'react-router-dom'


const Todo = () => {
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/");
  }
  if (localStorage.userId) {
    return (
      <div className='w-screen bg-emerald-100 h-screen flex items-center justify-center'>
        <div className='md:w-2/3 md:h-6/7 w-screen h-screen bg-green-300 md:rounded-2xl relative overflow-hidden'>
          <Header logout={logout}/>
          <Todos />
        </div>
      </div>
    )
  } else {
    useEffect(() => {
      navigate('/login');
    })
  }
}

export default Todo
