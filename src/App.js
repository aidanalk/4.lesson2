import './App.css';
import Modal from "./components/modal/Modal";
import React, {useState} from "react";
import List from "./components/list/List";
import Input from "./components/input/Input";
import {Button} from "./components/button/Button";

function App() {
    const [show, setShow] = useState(false)

    const [input, setInput] = useState('')
    console.log(input)

    const onChangeInput = (event) => {
        console.log(event.target.value)
        setInput(event.target.value)
    }

    const handleShow = () => {
        setShow(!show)
    }

    const [taskList, setTask] = useState([
    {
      id: 1,
      title: 'coding',
      completed: false
    },
    {
      id: 2,
      title: 'eat',
      completed: false
    },
    {
      id: 3,
      title: 'sleep',
      completed: false
    }])

    console.log(taskList)


    const handleAdd = () => {
        setTask(prev => [...prev,
        {
            id: taskList.length+1,
            title: input,
            completed: false
        }
        ])
        console.log(taskList)
    }

    const handleDelete = (id) => {
        const updatedTasks = taskList.filter(task => task.id !== id);
        setTask(updatedTasks);
    }

    return (
        <>
            {
                show && <Modal handleShow={handleShow}>
                    <Input placeholder={'добавить'}
                    onChangeInput={onChangeInput}/>
                    <Button onClick={handleAdd} text={'добавить'}/>
                </Modal>
            }
            <button onClick={handleShow}>open</button>

            <h1>Список задач</h1>
            <List tasks={taskList} handleDelete={handleDelete}/>
        </>
    )
}


export default App


// const sum = (a,b) => a+b
//
// sum(5,9)

// const user = {
//     name: 'Bakyt',
//     age: 18
// }
//
// user.name