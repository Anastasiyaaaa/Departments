import React, {Component} from 'react';
import classes from '../Layout/Layout.css';
import DepartmentList from './Department-list.js';
import Popup from "../PopUp/PopUp";

class Departments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action: "",
            popup: false,
            active: null
        };
    }
    updateData(config) {
        this.setState(config);
    }
    render(){
        return(
            <div>
                <main className={classes.Layout}>
                    <DepartmentList
                        data={this.props.data}
                        deleteHandler={this.props.deleteHandler}
                        update={this.updateData.bind(this)}
                        edit={this.props.editDepartments}
                        changeInput={this.props.changeInput}
                        active={this.state.active}
                        editHandler={this.props.editHandler}
                        editInput={this.props.editDepartmentInput}
                    />
                </main>
                {(this.state.popup === true) ?
                    <Popup
                        data={this.props.data}
                        deleteHandler={this.props.deleteHandler}
                        update={this.updateData.bind(this)}
                        edit={this.props.edit}
                        changeInput={this.props.changeInput}
                        active={this.state.active}
                        editHandler={this.props.editHandler}
                        editInput={this.props.editInput}>
                    </Popup>
                : null }
            </div>
        )
    }
}

export default Departments;