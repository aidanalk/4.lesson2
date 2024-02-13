import './App.css';
import { Button } from './components/button/Button';
import User from './components/user/User';
import Example from './components/example/Example';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Modal from "./components/modal/Modal";
import {useState} from "react";
import CountPage from "./page/countPage/CountPage";
import Input from "./components/input/Input";
import InputShow from "./components/inputShow/InputShow";
import List from "./components/list/List";

function App() {
    const navbar = ['Главная', 'О нас','Контакты']

    const [show, setShow] = useState(false)

    const [input, setInput] = useState('')

    const onChangeInput = (event) => {
        console.log(event.target.value)
        setInput(event.target.value)
    }

    const handleShow = () => {
        setShow(!show)
    }

    const taskList = [
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
    }
  ];

    return (
        <>
            {
                show && <Modal handleShow={handleShow}>
                </Modal>
            }
            <button onClick={handleShow}>open</button>

            <CountPage/>
            <InputShow input={input}/>
            <Input placeholder={'right'} onChangeInput={onChangeInput}/>

            <h1>Список задач</h1>
            <List tasks={taskList}/>
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