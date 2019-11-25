import React, {Component} from 'react';
import ActiveDepartmentKeys from "./ActiveDepartment-keys"
import ButtonsEmployee from '../../hoc/Layout/ButtonsEmployee.js'
import depart from "../../departments";
class activeDepartment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            departments: this.props.departments,
            active: this.props.active,
            update: this.props.update,
            checkButtonId: this.props.checkButtonId,
            departmentSelected: this.props.departments[this.props.active],
            employees: this.props.departments[this.props.active].employees
        };
        this.deleteHandler = this.deleteHandler.bind(this)
    }

    deleteHandler(index){
        // console.log({index});
        const employees = [...this.state.employees];
        employees.splice(index, 1); //метод для удаления элемента из объекта
        this.setState({employees: employees}) ;// переопределяем наш массив на новый
        console.log({index});
    }

    render() {
        if (!this.state.departments || !this.state.departments[this.state.active]) {
            return <h3>Выберите департамент для просмотра сотрудников</h3>;
        }
        // const departmentSelected = this.state.departments[this.state.active];

        // console.log(departmentSelected.employees);

        // function deleteEmployee() {
        //     console.log(departmentSelected.employees);
        //     const departments = [...this.state.departments];
        //     departments.splice(index, 1); //метод для удаления элемента из объекта
        //     this.setState({departments});// переопределяем наш массив на новый
        // }

        let layout;
        if ( this.state.employees.length >= 1) {
            layout =  this.state.employees.map((employee, index) => {

                let employeeObj = employee.employee;
                let dataEmployeeId = [ this.state.active, index].join("");
                return (
                    <tr id={index} key={index}>
                        <td colSpan="2">
                            <table>
                                <tbody>
                                <tr data-index={dataEmployeeId}>
                                    <ActiveDepartmentKeys employeeObj={employeeObj}/>
                                    <ButtonsEmployee
                                        // deleteEmployeeFun={this.state.deleteEmployee}
                                        update={this.state.update}
                                        deleteHandlerE={this.deleteHandler}
                                        index={index}
                                        checkButtonId={this.state.checkButtonId}
                                    />
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                )
            });
        } else {
            layout = <tr>
                <td>Сотрудников - нет</td>
            </tr>;
        }

        return (
            <table className="user-list table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>{ this.state.departmentSelected.name}</th>
                </tr>
                </thead>
                <tbody>
                {layout}
                <tr>
                    <td>
                        <button id="buttonAdd" data-button-add="employee" onClick={(e) => {
                            this.state.checkButtonId(e.target.id);
                            this.state.update({popup: true})
                        }}> Add
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    };
}

export default activeDepartment;