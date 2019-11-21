import React from 'react';
import DepartmentData from "./DepartmentData.js"

 const departmentList = ({ data, update, deleteHandler, editHandler, addHandler}) => {
    if (!data) { return (<p>Loading...</p>); }
    const departments = data.map((department, index) => {
        return (<DepartmentData key={index}
                                department={department}
                                deleteHandler={deleteHandler}
                                editHandler={editHandler}
                                addHandler={addHandler}
                                update={update}
                                index={index} />);
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
            </tbody>
        </table>
    );
};

export default departmentList;