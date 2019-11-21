import React, {Component} from 'react';
import classes from '../../hoc/Layout/Layout.css';
import DepartmentList from '../../hoc/Layout/Department-list.js';
import ActiveDepartment from '../../components/ActiveDepartment/ActiveDepartment.js';


class Departments extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        console.log(this.props.deleteHandler);
        return(
            <div className={classes.Layout}>
                <aside>
                    <ActiveDepartment data={this.props.data} active={this.props.active} />
                </aside>
                <main>
                    <DepartmentList
                        data={this.props.data}
                        deleteHandler={this.props.deleteHandler}
                        addHandler={this.props.addHandler}
                        editHandler={this.props.editHandler}
                        update={this.props.update}
                    />
                </main>
            </div>
        )
    }
}

export default Departments;