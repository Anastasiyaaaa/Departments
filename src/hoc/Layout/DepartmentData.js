import React from 'react';
import Buttons from './Buttons.js'


const departmentData = ({ department, index, update, deleteHandler, addHandler, editHandler  }) => {
    return (
        <tr>
            <td>{department.name}</td>
            <Buttons  update={update}
                      deleteHandler={deleteHandler}
                      addHandler={addHandler}
                      editHandler={editHandler}
                      index={index}/>
        </tr>
    );
};

export default departmentData;