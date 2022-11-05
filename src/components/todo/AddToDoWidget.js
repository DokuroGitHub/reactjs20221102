import React, { useState } from 'react';

const AddToDoWidget = (props) => {
    const { handleAddTodo } = props;
    const [name, setName] = useState('');

    const onChangeName = (event) => setName(event.target.value);

    const onSubmitName = () => {
        if (!name) {
            alert('name can not be empty');
            return;
        }
        handleAddTodo(name);
        setName('');
    };

    return (
        <div>
            <label>Todo's name: </label>
            <input value={name} onChange={onChangeName}></input>
            <button onClick={onSubmitName}>Submit</button>
        </div >
    );
}

export default AddToDoWidget;
