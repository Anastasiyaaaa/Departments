import React from 'react';
import classes from './Button.css';

const buttons = ({ update, index, deleteHandler, editHandler, edit}) => {
    console.log(edit);
    return (
        <React.Fragment>
            <td> {(edit) ?
                <button id="buttonSubmit" onClick={() => {editHandler(index);}}>Submit</button> :
                <button id="buttonEdit" onClick={() => { editHandler(index);  }}>Edit</button>
            }</td>
            <td><button id="buttonRemove" className={classes.Btn_danger} onClick={() => deleteHandler (index)}> Remove </button></td>
            <td><button id="buttonList" className={classes.Btn_list} onClick={() => {update({ active: index,  popup: true  }) }}> Список </button></td>
        </React.Fragment>
    )
};

export default buttons;