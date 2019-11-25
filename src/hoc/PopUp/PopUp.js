import React from 'react';
import classes from './PopUp.css';
import ActiveDepartment from "../../components/ActiveDepartment/ActiveDepartment";


const popup = ({update, checkButtonId, departments, active, deleteHandler}) => {
   return (
       <div className={classes.PopUp_body}>
           <h1>Popup</h1>
           <ActiveDepartment departments={departments}
                             active={active}
                             update={update}
                             deleteHandler={deleteHandler}
                             index={active}
                             checkButtonId={checkButtonId}
           />
           <button id="popup-close" onClick={(e) => { checkButtonId(e.target.id); update({  popup: false}) } }>Close</button>
       </div>
   )
};

export default popup;