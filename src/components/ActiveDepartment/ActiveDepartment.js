import React, {Component} from 'react';
import ActiveDepartmentKeys from "./ActiveDepartment-keys"
import ButtonsEmployees from '../../hoc/Layout/ButtonsEmployees.js'
// class activeDepartmentClass extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: this.props.data,
//             active: this.props.active,
//             update: this.props.update,
//             checkButtonId: this.props.checkButtonId,
//             deleter: ""
//         };
//         // this.handleChange = this.handleChange.bind(this);
//         // this.deleteHandler = this.deleteHandler.bind(this);
//     }
//     componentDidUpdate(){
//         console.log("componentDidUpdate")
//     }
//    /* deleteHandler(index){
//         const departments = [...this.state.departments];
//         departments.splice(index, 1); //метод для удаления элемента из объекта
//         this.setState({departments}) ;// переопределяем наш массив на новый
//     }*/
//     handleChange(index){
//         console.log("edit" + index);
//         this.setState({
//             deleter : "deleter"
//         });
//         console.log(this.state.deleter);
//     }
//     render(){
//         if (!this.state.data || !this.state.data[this.state.active]) {
//             return <h3>Выберите департамент для просмотра сотрудников</h3>;
//         }
//         const departmentSelected = this.state.data[this.state.active];
//         let layout;
//         if (departmentSelected.employees.length >= 1){
//             layout = departmentSelected.employees.map((employee, index) => {
//                 let employeeObj = employee.employee;
//                 return (
//                     <tr key={index}>
//                         <td colSpan="2">
//                             <table>
//                                 <tbody>
//                                 <tr>
//                                     <ActiveDepartmentKeys employeeObj={employeeObj}/>
//                                     <ButtonsEmployees
//                                         update={this.state.update}
//                                         onChanger={this.handleChange.bind(this)}
//                                         index={this.state.active}
//                                         checkButtonId={this.state.checkButtonId}
//                                     />
//                                 </tr>
//                                 <tr><td><button id="buttonRemoveEmployee" onClick={this.handleChange}> Remove </button></td></tr>
//                                 </tbody>
//                             </table>
//                         </td>
//                     </tr>
//                 )
//             });
//         } else {
//             layout = <tr><td>Сотрудников - нет</td></tr>;
//         }
//         return(
//             <table className="user-list table table-striped">
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>{departmentSelected.name}</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {layout}
//                 <tr>
//                     <td><button id="buttonAdd" data-button-add="employee" onClick={(e) => { this.state.checkButtonId(e.target.id) }}> Add </button></td>
//                 </tr>
//                 </tbody>
//             </table>
//         )
//     }
// }
const activeDepartment = ({ data, active, update, checkButtonId, deleteHandler, changeInput, edit, editHandler, editIndex }) => {

    console.log('data');
    if (!data || !data[active]) {
        return <h3>Выберите департамент для просмотра сотрудников</h3>;
    }
    const departmentSelected = data[active];
    let layout;
    if (departmentSelected.employees.length >= 1){
        layout = departmentSelected.employees.map((employee, index) => {
            let employeeObj = employee.employee;
            let editEmployee;
            if (editIndex === index) {
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

// export default activeDepartmentClass;
export default activeDepartment;