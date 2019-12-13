import React from 'react';
import DepartmentData from "./DepartmentData.js"

 const departmentList = ({ data,edit, update, deleteHandler, changeInput, editHandler, editInput }) => {
    if (!data) { return (<p>Loading...</p>); }
    const departments = data.map((department, index) => {
        let readOnly;
        if (edit === true){
            readOnly = "";
        }else { readOnly ="readonly"}
        let editDepartment;
        if (editInput === index) {
            editDepartment = edit;
        }
        return (<DepartmentData key={index}
                                department={department}
                                deleteHandler={deleteHandler}
                                update={update}
                                index={index}
                                changeInput={changeInput}
                                editHandler={editHandler}
                                readOnly={readOnly}
                                edit={editDepartment}
        />);
    });
    return (
        <table className="user-list table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Remove</th>
                    <th>List</th>
                </tr>
            </thead>
            <tbody>
            {departments}
            </tbody>
        </table>
    );
};

export default departmentList;