import React from 'react';

/*
const ButtonsEmployees = (index, onChanger) => {
    return (
        <React.Fragment>
            <td><button id="buttonEdit">Edit</button></td>
            <td><button id="buttonRemoveEmployee" onClick={() => onChanger(index)}> Remove </button></td>
        </React.Fragment>
    )
};
*/
const ButtonsEmployees = ({ active, update, index, deleteHandler, checkButtonId}) => {
    return (
        <React.Fragment>
            <td><button id="buttonEdit" onClick={(e) => { checkButtonId(e.target.id);  }}>Edit</button></td>
            <td><button id="buttonRemove" onClick={(e) => deleteHandler (active, index, e)}> Remove </button></td>
        </React.Fragment>
    )
};

export default ButtonsEmployees;