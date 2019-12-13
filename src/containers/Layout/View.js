import React, {Component} from 'react';
import depart from '../../departments.json';
import DepartmentsLayout from '../Departments/DepartmentsLayout.js';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: depart,
            edit: false,
            editDepartments: false,
            editInput: "",
            editDepartmentInput: ""
        };
    }
    deleteHandler(active, index, e){
        if (e && e.target.parentNode.parentNode.id === 'employeesList' ){
            const departmentsPopup = [...this.state.departments];
            const employeeRemove = departmentsPopup[active];
            employeeRemove.employees.splice(index, 1);

            this.setState(function() {return {}}); //почему рабоатает?????
        }else {
            const departments = [...this.state.departments];
            departments.splice(index, 1); //метод для удаления элемента из объекта
            this.setState({departments}) ;// переопределяем наш массив на новый
        }
    }
    editHandler(index, component){
        if (component === "employee"){
            if (this.state.edit) {
                this.setState({
                    edit: !this.state.edit,
                    editInput: null
                });
            }
            this.setState({
                edit: !this.state.edit,
                editInput: index
            });
        } else if (component !== "employee") {
            if (this.state.editDepartments) {
                this.setState({
                    editDepartments: !this.state.editDepartments,
                    editDepartmentInput: null
                });
            }
            this.setState({
                editDepartments: !this.state.editDepartments,
                editDepartmentInput: index
            });
        }
    }
    changeInput(activeDepart, value, component, activeEmployee, activeEmpl, key){
        this.setState(function(state) {
            const departments = [...state.departments];
            if (component === 'employee'){
                departments[activeDepart].employees[activeEmployee].employee[key] = value;
            }else { departments[activeDepart].name = value; }
            return {
                departments
            }
        });
    }

    render(){
        return (
            <DepartmentsLayout
                data={this.state.departments}
                edit={this.state.edit}
                editDepartments={this.state.editDepartments}
                editDepartmentInput={this.state.editDepartmentInput}
                editInput={this.state.editInput}
                deleteHandler={this.deleteHandler.bind(this)}
                editHandler={this.editHandler.bind(this)}
                changeInput={this.changeInput.bind(this)}
            >
            </DepartmentsLayout>
        )
    }
}

export default View