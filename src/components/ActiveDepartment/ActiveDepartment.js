import React from 'react';
import ActiveDepartmentKeys from "./ActiveDepartment-keys"
import ButtonsEmployees from '../Buttons/ButtonsEmployees.js'

const activeDepartment = ({indexAdd, data, active, update, deleteHandler, changeInput, edit, editHandler, editInput }) => {

    if (!data || !data[active]) {
        return <h3>Выберите департамент для просмотра сотрудников</h3>;
    }
    const departmentSelected = data[active];
    let layout;
    if (departmentSelected.employees.length >= 1){
        layout = departmentSelected.employees.map((employee, index) => {
            let employeeObj = employee.employee;
            let editEmployee;
            if (editInput === index) {
                editEmployee = edit;
            }
            return (
                <tr key={index} id={index} data-id={editEmployee}>
                    <td colSpan="2">
                        <table>
                            <tbody>
                            <tr id='employeesList'>
                                <ActiveDepartmentKeys
                                    employeeObj={employeeObj}
                                    changeInput={changeInput}
                                    activeEmployee={index}
                                    indexAdd={indexAdd}
                                    activeDepart={active}
                                    edit={editEmployee}
                                />
                                <ButtonsEmployees
                                    editHandler={editHandler}
                                    edit={editEmployee}
                                    update={update}
                                    deleteHandler={deleteHandler}
                                    index={index}
                                    active={active}
                                />
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            )
        });
    } else {
        layout = <tr><td>Сотрудников - нет</td></tr>;
    }

    return (
        <table className="user-list table table-striped">
            <thead>
            <tr>
                <th>Name</th>
                <th>{departmentSelected.name}</th>
            </tr>
            </thead>
            <tbody>
            {layout}
            </tbody>
        </table>
    );
};


export default activeDepartment;