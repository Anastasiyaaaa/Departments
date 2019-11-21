import React, {Component} from 'react';
import depart from './../../departments.json';
import Layout from './Layout.js';
import DepartmentEdit from './DepartmentEdit.js';
import DepartmentAdd from './DepartmentAdd.js';


class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: depart,
            active: null,
            term: '',
            action: "main"
        };
    }
    deleteHandler(index){
        const departments = [...this.state.departments];
        departments.splice(index, 1); //метод для удаления элемента из объекта
        this.setState({departments}) ;// переопределяем наш массив на новый
    }
    editHandler(index){
        console.log("edit" + index);
        this.setState({action : "edit"});
    }
    addHandler(index){
        console.log("add" + index);
        this.setState({action : "add"});
    }
    updateData(config) {
        this.setState(config);
    }
    render(){
        if (this.state.action === "edit"){
            return(
                <DepartmentEdit update={this.updateData.bind(this)} action={this.state.action}/>
            )
        }else if (this.state.action === "add"){
            return(
                    <DepartmentAdd update={this.updateData.bind(this)} action={this.state.action}/>
                )
        } else if(this.state.action === "main"){
            return (
                <Layout
                    active={this.state.active}
                    data={this.state.departments}
                    deleteHandler={this.deleteHandler.bind(this)}
                    addHandler={this.addHandler.bind(this)}
                    editHandler={this.editHandler.bind(this)}
                    update={this.updateData.bind(this)}
                />
            )
        }
    }
}

export default View