import React from 'react';

const ToDoItemsWidget = (props) => {
    const { data, handleDeleteTodo } = props;

    return (
        <div>
            <div>-----Todos----</div>
            {
                data.map((item) => (
                    <div id={item.id} key={item.id} >
                        {item.name} <label onClick={() => handleDeleteTodo(item.id)} style={{ color: 'red' }}>(X)</label>
                    </div>
                ))
            }
        </div >
    );
}

export default ToDoItemsWidget;
