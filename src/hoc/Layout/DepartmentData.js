import React from 'react';
import Buttons from './Buttons.js'


const departmentData = ({ department, index, update, deleteHandler, checkButtonId}) => {
    return (
        <tr>
            <td>{department.name}</td>
            <Buttons
                update={update}
                deleteHandler={deleteHandler}
                index={index}
                checkButtonId={checkButtonId}
            />
        </tr>
    );
};

export default departmentData;