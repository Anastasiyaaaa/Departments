import React, {Component} from 'react';
import classes from '../../hoc/Layout/Layout.css';
import DepartmentList from '../../hoc/Layout/Department-list.js';
import ActiveDepartment from '../../components/ActiveDepartment/ActiveDepartment.js';
import depart from "../../departments";
import Popup from "../../hoc/PopUp/PopUp";


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
        console.log(config)
    }
    checkButtonId(id){
        if (id === "buttonList"){
            // this.setState({
            //     active: ""
            // })
        }
        console.log(id)
    };
    render(){
        return(
            <div className={classes.Layout}>
               {/* <aside>
                    <ActiveDepartment data={this.props.data} active={this.state.active} />
                </aside>*/}
                <main>
                    <DepartmentList
                        data={this.props.data}
                        deleteHandler={this.props.deleteHandler}
                        update={this.updateData.bind(this)}
                        checkButtonId={this.checkButtonId.bind(this)}
                    />
                </main>
                {(this.state.popup === true) ?
                    <Popup
                        deleteHandler={this.props.deleteHandler}
                        checkButtonId={this.checkButtonId.bind(this)}
                        update={this.updateData.bind(this)}
                        data={this.props.data}
                        active={this.state.active}
                        changeInput={this.props.changeInput}>
                    </Popup>
                : null }
            </div>
        )
    }
}

export default Departments;