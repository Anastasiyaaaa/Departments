import React from 'react';
import DepartmentData from "./DepartmentData.js"

 const departmentList = ({ data, update, deleteHandler, checkButtonId }) => {
    if (!data) { return (<p>Loading...</p>); }
    const departments = data.map((department, index) => {
        return (<DepartmentData key={index}
                                department={department}
                                deleteHandler={deleteHandler}
                                update={update}
                                index={index}
                                checkButtonId={checkButtonId}
        />);
    });
    return (
        <table className="user-list table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Remove</th>
                    <th>Add</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
            {departments}
            <tr>
                <td><button id="buttonAdd" data-button-add="departments" onClick={(e) => { checkButtonId(e.target.id); update({ popup: true  }) }}> Add </button></td>
            </tr>
            </tbody>
        </table>
    );
};

export default departmentList;