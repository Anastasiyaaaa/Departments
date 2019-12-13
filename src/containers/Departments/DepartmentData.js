import React from 'react';
import Buttons from '../../components/Buttons/Buttons.js'
import classes from '../../components/Buttons/Button.css';


const departmentData = ({ department, index, update, deleteHandler, edit, changeInput, editHandler}) => {
    let readOnly, className;
    if (edit === true){
        readOnly = "";
        className = classes.Input_change;
    }else { readOnly ="readonly"; className="";}
    return (
        <tr>
            <td>
                <input className={className} readOnly={readOnly}
                       onChange={(e) => {changeInput(index, e.target.value)}}
                       value={department.name} />
            </td>
            <Buttons
                editHandler={editHandler}
                update={update}
                deleteHandler={deleteHandler}
                index={index}
                edit={edit}
            />
        </tr>
    );
};

export default departmentData;
