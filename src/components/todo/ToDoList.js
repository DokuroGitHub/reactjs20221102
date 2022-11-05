import React, { useState } from 'react';
import AddToDoWidget from './AddToDoWidget';
import ToDoItemsWidget from './ToDoItemsWidget';

const ToDoList = () => {
    const [toDoList, setToDoList] = useState([
        { id: 'todo1', name: 'Watching YT' },
        { id: 'todo2', name: 'Using FB' },
        { id: 'todo3', name: 'Reading books' }
    ]);
    const [currentIdIndex, setCurrentIdIndex] = useState(4);


    const handleAddTodo = (name) => {
        setToDoList([
            ...toDoList,
            {
                id: 'todo' + currentIdIndex,
                name: name,
            },
        ]);
        setCurrentIdIndex(currentIdIndex + 1);
    };

    const handleDeleteTodo = (id) => setToDoList([...toDoList.filter((item) => item.id !== id)]);

    return (
        <div>
            <AddToDoWidget handleAddTodo={handleAddTodo} />
            <ToDoItemsWidget data={toDoList} handleDeleteTodo={handleDeleteTodo} />
        </div >
    );
}

// class ToDoList2 extends React.Component {
//     state = {
//         name: "Eric",
//     };

//     onChangeName = (event) => {
//         this.setState({ name: event.target.value });
//     };

//     render() {
//         return (
//             <div>
//                 <label>Name: </label>
//                 <input value={this.state.name} onChange={this.onChangeName}></input>
//                 <br></br>
//                 Hello ToDoList with name = {this.state.name}
//             </div>
//         );
//     }
// }

export default ToDoList;
