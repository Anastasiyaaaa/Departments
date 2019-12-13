import React from 'react';
import classes from './Button.css';

const ButtonsEmployees = ({ active, update, index, deleteHandler, editHandler, edit}) => {
    const component =  'employee';
    return (
        <React.Fragment>

            <td>
                {(edit) ?
                    <button id="buttonSubmit" onClick={() => {editHandler(index, component);}}>Submit</button> :
                    <button id="buttonEdit" onClick={() => { editHandler(index, component);  }}>Edit</button>
                }
            </td>
            <td><button id="buttonRemove" className={classes.Btn_danger} onClick={(e) => deleteHandler (active, index, e)}> Remove </button></td>
        </React.Fragment>
    )
};

export default ButtonsEmployees;