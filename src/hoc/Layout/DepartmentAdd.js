import React from 'react';

const departmentAdd = ({action, update}) => {
    return(
        <div>
            <h3>You clicked Add</h3>
            <button onClick={() =>  update({  action: "main"}) }>Close</button>
        </div>
    )
};
export default departmentAdd;