import React from 'react';

const activeDepartmentKeys = ({employeeObj}) => {
    const employeeKeys = Object.keys(employeeObj);
    return (
        employeeKeys.map( (activeKey, index) => {
            return (
                <td key={index}>
                    <input type="text" value={employeeObj[activeKey]} />
                </td>
            )
        })
    )
};

export default activeDepartmentKeys;