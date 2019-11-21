import React from 'react';
import ActiveDepartmentKeys from "./ActiveDepartment-keys"
const activeDepartment = ({ data, active }) => {

    if (!data || !data[active]) {
        return <h3>Выберите департамент для просмотра сотрудников</h3>;
    }
    const departmentSelected = data[active];
    let layout;
    if (departmentSelected.employees.length >= 1){
        layout = departmentSelected.employees.map((employee, index) => {
            let employeeObj = employee.employee;
            return (
                <tr key={index}>
                    <td colSpan="2">
                        <table>
                            <tbody>
                            <tr>
                                <ActiveDepartmentKeys employeeObj={employeeObj}/>
                                <td><button>Edit</button></td>
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
            <tbody>{layout}</tbody>
        </table>
    );
};

export default activeDepartment;