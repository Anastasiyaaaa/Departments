import React from 'react';

const departmentEdit = ({action, update}) => {

    console.log(action);
    return(
        <div>
            <h3>Yoy clicked Edit</h3>
            <button onClick={() =>  update({  action: "main"}) }>Close</button>
        </div>
    )

};
export default departmentEdit;