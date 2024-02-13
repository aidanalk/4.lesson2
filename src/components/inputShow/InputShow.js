import React from 'react';
import classes from "./Input.modul.css";

const InputShow = ({input}) => {

    const color = () => {
        if (input.length > 5) {
            return 'green'
        } else return  'red'
    }

    console.log(color())

    const person = {
        name: 'qwert',
        age: 50
    }
    console.log(person.name, '===', person['name'])

    return (
        <div className={classes[color()]}>
            {input}
        </div>
    );
};

export default InputShow;