import { useRef } from 'react'
import { IoAdd } from "react-icons/io5";

const Add = ({ handleChange}) => {
    const todo_ref = useRef();

    return (
        <div className='p-4 m-1 flex items-center justify-center *:h-10 *:pl-2 *:pr-2  *:text-white'>
            <input className="bg-green-600 border-2 border-green-600 border-r-0 rounded-l-full  focus:bg-white focus:outline-0 focus:text-green-600 w-3/4" type="text" placeholder="Add your todo..." ref={todo_ref} onKeyDown={(e) => { e.key === 'Enter' && handleChange(todo_ref) }} />
            <button className='bg-green-600 rounded-r-full hover:bg-green-700 active:bg-green-800 text-[26px]'
                onClick={() => {handleChange(todo_ref)}}><IoAdd /></button>
        </div>
    )
}

export default Add
