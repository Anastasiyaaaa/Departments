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
            popup: false
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
            action : "edit",
            popup: true
        });
    }
    changeInput(activeDepart, activeEmployee, activeEmpl, key, value){

        const departments = [...this.state.departments];
        console.log(departments[activeDepart].employees[activeEmployee]);
        let empl =departments[activeDepart].employees[activeEmployee];
        console.log(empl[0].name);

        console.log(key)

       /* this.setState(function(state, props) {
            const departments = [...this.state.departments];
            return {

            }
        });*/
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