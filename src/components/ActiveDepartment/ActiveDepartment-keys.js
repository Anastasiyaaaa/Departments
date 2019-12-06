import React from 'react';

const activeDepartmentKeys = ({employeeObj, changeInput, activeDepart, activeEmployee, edit}) => {
    const employeeKeys = Object.keys(employeeObj);
    return (
        employeeKeys.map( (activeKey, index) => {
            let inputType;
            if (activeKey === "salary"){
                inputType = "number"
            }else if (activeKey === "email"){
                inputType = "email"
            }else{inputType = "text"}
            let readOnly;
            if (edit === true){
                readOnly = "";
            }else { readOnly ="readonly"}

            return (
                <td key={index} id={index} data-active={activeEmployee}>
                    <input readOnly={readOnly} name={activeKey} onChange={(e) => {changeInput(activeDepart, activeEmployee, index, activeKey, e.target.value)}} type={inputType} value={employeeObj[activeKey]} />
                </td>
            )
        })
    )
};

export default activeDepartmentKeys;