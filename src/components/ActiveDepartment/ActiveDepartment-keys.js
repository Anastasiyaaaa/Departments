import React, {Component} from 'react';

class activeDepartmentKeys extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            employee: this.props.employeeObj,
            employeeObj: Object.keys(this.props.employeeObj)
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        // this.setState({value: event.target.value});  onChange={(e) => {this.handleChange(e)}}
    }

    render() {
        return (
            this.state.employeeObj.map( (activeKey, index) => {
            return (
                <td key={index}>
                    <input type="text" readOnly value={this.state.employee[activeKey]} />
                </td>
            )
            })
        )
    }
}

export default activeDepartmentKeys;