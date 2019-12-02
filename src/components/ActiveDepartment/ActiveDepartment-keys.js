import React from 'react';

const activeDepartmentKeys = ({employeeObj, changeInput, activeDepart, activeEmployee}) => {
    const employeeKeys = Object.keys(employeeObj);
    return (
        employeeKeys.map( (activeKey, index) => {
            return (
                <td key={index} id={index} className={activeDepart}>
                    <input  onChange={(e) => {changeInput(activeDepart, activeEmployee, index, activeKey, e.target.value)}} type="text" value={employeeObj[activeKey]} />
                </td>
            )
        })
    )
};

export default activeDepartmentKeys;