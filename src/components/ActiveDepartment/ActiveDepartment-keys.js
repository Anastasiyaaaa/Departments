import React from 'react';
import classes from '../Buttons/Button.css';
import classesPopUp from '../../containers/PopUp/PopUp.css';


const activeDepartmentKeys = ({employeeObj, changeInput, activeDepart, activeEmployee, edit}) => {
    const employeeKeys = Object.keys(employeeObj);
    const component =  'employee';
    let style = classesPopUp.PopUp_input;
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
                style += " "  + classes.Input_change;
            }else { readOnly ="readonly";}

            return (
                <td key={index} id={index} data-active={activeEmployee}>
                    <input className={style} readOnly={readOnly} name={activeKey} onChange={(e) => {changeInput(activeDepart, e.target.value, component, activeEmployee, index, activeKey)}} type={inputType} value={employeeObj[activeKey]} />
                </td>
            )
        })
    )
};

export default activeDepartmentKeys;