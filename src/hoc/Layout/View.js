import React, {Component} from 'react';
import depart from './../../departments.json';
import DepartmentsLayout from '../../containers/Departments/DepartmentsLayout.js';
import DepartmentEdit from './DepartmentEdit.js';
import DepartmentAdd from './DepartmentAdd.js';


class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: depart,
            active: null,
            term: '',
            action: "",
            popup: false,
            edit: false,
            editIndex: ""
        };
    }
    deleteHandler(active, index, e){
        if (e && e.target.parentNode.parentNode.id === 'employeesList' ){
            const departmentsPopup = [...this.state.departments];
            const employeeRemove = departmentsPopup[active];
            employeeRemove.employees.splice(index, 1);
            console.log(employeeRemove);

            this.setState(function() {return {}}); //почему рабоатает?????
        }else {
            const departments = [...this.state.departments];
            departments.splice(index, 1); //метод для удаления элемента из объекта
            this.setState({departments}) ;// переопределяем наш массив на новый
        }
    }
    editHandler(index){
        console.log("edit" + index);
        this.setState({
            edit: true,
            editIndex: index
        });
    }
    changeInput(activeDepart, activeEmployee, activeEmpl, key, value){

        const departments = [...this.state.departments];
        console.log(departments[activeDepart].employees[activeEmployee]);
        departments[activeDepart].employees[activeEmployee].employee[key] = value;

        console.log( departments[activeDepart].employees[activeEmployee].employee[key]);

        // console.log(value)

        this.setState(function(state, props) {
            const departments = [...state.departments];
            departments[activeDepart].employees[activeEmployee].employee[key] = value;
            return {
                departments
            }
        });
        // this.setState({
        //     key : "edit",
        //     popup: true
        // });
    }
    addHandler(index){
        console.log("add" + index);
        this.setState({
            action : "add",
            popup: true
        });
    }/*
    updateData(config) {
        this.setState(config);
    }*/
    render(){
        /*if (this.state.action === "edit"){
            return(
                <DepartmentEdit update={this.updateData.bind(this)} action={this.state.action}/>
            )
        }else if (this.state.action === "add"){
            return(
                    <DepartmentAdd update={this.updateData.bind(this)} action={this.state.action}/>
                )
        } else*/ /*if(this.state.popup === true){
            return (
            )
        } else {*/
            return (
                <DepartmentsLayout
                    active={this.state.active}
                    data={this.state.departments}
                    edit={this.state.edit}
                    editIndex={this.state.editIndex}
                    deleteHandler={this.deleteHandler.bind(this)}
                    addHandler={this.addHandler.bind(this)}
                    editHandler={this.editHandler.bind(this)}
                    changeInput={this.changeInput.bind(this)}
                    // update={this.updateData.bind(this)}
                >
                </DepartmentsLayout>
            )
        }
}

export default View