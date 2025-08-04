import { useEffect, useState } from 'react'
import Add from './Add';
import TodoList from './TodoList';
import { BiNotepad } from "react-icons/bi";

const url = "http://localhost:3000/todos";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [showComplete, setShowComplete] = useState(false);
    const [flag, setFlag] = useState(false);
    const userId=localStorage.getItem("userId");

    useEffect(() => {
        setIsFetching(true);
        fetch(url+ "/fetch", {
            method:"POST",
            body: JSON.stringify({ id: userId }),
            headers:{
                "Content-Type":"application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                setTodos(data.data);
                setIsFetching(false);
            })
            .catch(err => console.log(err));
    }, [flag]);


    // Adding a task
    function addTodo(value) {
        if (value.length <= 3) {
            alert("Task should contain more than 3 characters.")
        } else {
            fetch(url, {
                method: "POST",
                body: JSON.stringify({ id: userId, task: value, isDone: false }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.errors) {
                        alert(data.errors.msg)
                    } else {
                        setFlag(!flag);
                    }
                })
        }
    }
    //Edit a task
    function editTodo(id) {
        return;
    }

    // Deleting a task
    function deleteTodo(index) {
        fetch(url, {
            method: "DELETE",
            body: JSON.stringify({ id: userId,index }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(data => {
                setFlag(!flag);
            })
            .catch(err => {
                alert("Task does not exist.");
            })
    }

    // Mark task done
    function setDone(index) {
        fetch(url, {
            method: "PUT",
            body: JSON.stringify({ id:userId,index }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                setFlag(!flag);
            })
            .catch(err => console.log(err));
    };

    // Handle change
    function handleChange(todo_ref) {
        addTodo(todo_ref.current.value);
        todo_ref.current.value = "";
        setFlag(!flag);
    }

    return (
        <>
            <Add handleChange={handleChange} />
            <div className='flex flex-col h-4/5 items-center'>
                <h1 className='flex justify-center items-center gap-1 text-[16px] bg-green-700 h-auto p-1 w-full text-white'>
                    <BiNotepad />
                    Your Todo List
                </h1>
                <button className={`absolute p-2 rounded-full bottom-3 transition-colors duration-600 ${showComplete ? "bg-white text-green-900" : "bg-green-900 text-white"}`}
                    onClick={() => setShowComplete(!showComplete)}>
                    {showComplete ? "All Tasks" : "Incomplete"}
                </button>
                <ol className='*:flex *:justify-between *:my-4 w-4/5 md:h-3/4 h-6/7 mt-2 text=[24px] overflow-y-auto 
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-green-500 
                [&::-webkit-scrollbar-track]:rounded-full  
                [&::-webkit-scrollbar-thumb]:bg-green-800 
                [&::-webkit-scrollbar-thumb]:rounded-full '>
                    <TodoList todos={todos} isFetching={isFetching} setDone={setDone} deleteTodo={deleteTodo} editTodo={editTodo} showComplete={showComplete} />
                </ol>
            </div>
        </>
    );
}

export default Todos
