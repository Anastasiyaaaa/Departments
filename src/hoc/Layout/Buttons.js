import React from 'react';

const buttons = ({ update, index, deleteHandler, editHandler, addHandler }) => {
    return (
        <React.Fragment>
        <td>
            <button onClick={() => editHandler (index)}>Edits</button>
        </td>
        <td>
            <button onClick={() => addHandler (index)}> Add </button>
        </td>
        <td>
            <button onClick={() => deleteHandler (index)}> Remove </button>
        </td>
        <td>
            <button onClick={() => update({ active: index })}> Список </button>
        </td>
        </React.Fragment>
    )
};

export default buttons;