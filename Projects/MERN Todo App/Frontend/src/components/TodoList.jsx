import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const TodoList = ({ todos, isFetching, setDone, deleteTodo, editTodo, showComplete }) => {
    if (isFetching) {
        return <li>Fetching data...</li>
    }
    if (!todos.length){
        return "Nothing to show...."
    }
    const todoList =todos.map(todo => {
        if (!showComplete && todo.isDone) {
            return null;
        }
        return (
            <li key={todo._id} className='text-[18px]'>
                <div className={`flex gap-2 w-5/6 h-auto items-center ${todo.isDone ? "line-through" : ""}`}>
                    <label htmlFor={todo._id} title={todo.isDone ? "Mark Undone" : "Mark Done"} className='text-[16px] bg-green-700 p-1 rounded-full text-white min-w-6 h-6'>
                        {todo.isDone && <FaCheck />}
                    </label>
                    <input className='hidden' id={todo._id} type="checkbox" onChange={() => setDone(todo._id)} checked={todo.isDone} />
                    <p className='w-7/8 h-auto text-balance break-words'>{todo.task}</p>
                </div>
                <div className='*:bg-green-700 *:p-1 *:rounded-[4px] [&_label]:rounded-full *:mx-1.5 *:text-white flex items-center'>
                    {/* <button onClick={() => editTodo(todo._id)}>Edit</button> */}
                    <button className="hover:bg-green-800 active:bg-green-950" title='Delete' onClick={() => deleteTodo(todo._id)}><MdDelete /></button>
                </div>
            </li>
        )
    }) ;
    if (!showComplete && todoList.every(todo=>todo===null)){
        return "All tasks are done..." ;
    }
    return (
        <>
            {todoList}
        </>
    )
}

export default TodoList
