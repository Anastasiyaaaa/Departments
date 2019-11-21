import React, {Component} from 'react';
import classes from './PopUp.css';
import depart from './../../departments.json';


class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: depart,
            active: null,
            term: '',
            action: "main"
        };
    }

    render() {
        // console.log(active);
        return (
            <div className={classes.PopUp_body}>popup</div>
        )
    }
}

export default Popup;