import React from 'react';

const activeDepartmentKeys = ({employeeObj }) => {
    const employeeKeys = Object.keys(employeeObj);
    return (
        employeeKeys.map( (activeKey) => {
            return (
                <td>{employeeObj[activeKey]}</td>
            )
        })
    )
};

export default activeDepartmentKeys;