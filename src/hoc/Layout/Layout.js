import React, {Component} from 'react';
import classes from './Layout.css';
import DepartmentList from './Department-list.js';
import ActiveDepartment from '../../components/ActiveDepartment/ActiveDepartment.js';


class Layout extends Component {
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

export default Layout