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
    deleteHandler(index){
        const departments = [...this.state.departments];
        departments.splice(index, 1); //метод для удаления элемента из объекта
        this.setState({departments}) ;// переопределяем наш массив на новый
    }
    editHandler(index){
        console.log("edit" + index);
        this.setState({
            action : "edit",
            popup: true
        });
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
                    departments={this.state.departments}
                    deleteHandler={this.deleteHandler.bind(this)}
                    addHandler={this.addHandler.bind(this)}
                    editHandler={this.editHandler.bind(this)}
                    // update={this.updateData.bind(this)}
                >
                </DepartmentsLayout>
            )
        }
}

export default View