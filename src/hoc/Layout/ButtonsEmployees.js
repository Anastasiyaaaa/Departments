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
const ButtonsEmployees = ({ active, update, index, deleteHandler, checkButtonId, editHandler, edit}) => {
    let style = ''

    ;
    return (
        <React.Fragment>

            <td>
                {(edit) ? <button id="buttonSubmit" onClick={(e) => {console.log(e.target.parentNode.parentNode) }}>Submit</button> : null}
                <button id="buttonEdit" onClick={(e) => { editHandler(index);  }}>Edit</button>
            </td>
            <td><button id="buttonRemove" onClick={(e) => deleteHandler (active, index, e)}> Remove </button></td>
        </React.Fragment>
    )
};

export default ButtonsEmployees;