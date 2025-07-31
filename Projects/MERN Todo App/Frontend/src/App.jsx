import Header from './components/Header';
import Todos from './components/Todos';
// import ContextTodos from './components/Todos';
function App() {
  return (
      <div className='w-screen bg-emerald-100 h-screen flex items-center justify-center'>
        <div className='md:w-2/3 md:h-6/7 w-screen h-screen bg-green-300 md:rounded-2xl relative overflow-hidden'>
          <Header />
          <Todos/>
        </div>
      </div>
    
  )
}

export default App
