import React from 'react';
import classes from './PopUp.css';
import ActiveDepartment from "../../components/ActiveDepartment/ActiveDepartment";

const popup = ({indexAdd, update,  data, active, deleteHandler, changeInput, edit, editHandler, editInput}) => {
    return (
        <div className={classes.PopUp_body}>
            <h1>Popup</h1>
            <ActiveDepartment data={data}
                              active={active}
                              update={update}
                              indexAdd={indexAdd}
                              editHandler={editHandler}
                              editInput={editInput}
                              deleteHandler={deleteHandler}
                              index={active}
                              changeInput={changeInput}
                              edit={edit}
            />
            <button id="popup-close" className={classes.Btn_close} onClick={() => { update({  popup: false}) } }>X</button>
        </div>
    )
};

export default popup;