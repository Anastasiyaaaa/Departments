import React from 'react';
import ActiveDepartmentKeys from "./ActiveDepartment-keys"
import Buttons from '../../hoc/Layout/Buttons.js'
const activeDepartment = ({ data, active, update, checkButtonId, deleteHandler }) => {

    console.log('data');
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
                                <Buttons
                                    update={update}
                                    deleteHandler={deleteHandler}
                                    index={active}
                                    checkButtonId={checkButtonId}
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
            <tr>
                <td><button id="buttonAdd" data-button-add="employee" onClick={(e) => { checkButtonId(e.target.id); update({ popup: true  }) }}> Add </button></td>
            </tr>
            </tbody>
        </table>
    );
};

export default activeDepartment;