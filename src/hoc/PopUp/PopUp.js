import React from 'react';
import classes from './PopUp.css';
import Buttons from '../Layout/Buttons.js'
import ActiveDepartment from "../../components/ActiveDepartment/ActiveDepartment";


const popup = ({update, checkButtonId, data, active, deleteHandler}) => {

        // console.log(active);
        return (
            <div className={classes.PopUp_body}>
                <h1>Popup</h1>
                <ActiveDepartment data={data}
                                  active={active}
                                  update={update}
                                  deleteHandler={deleteHandler}
                                  index={active}
                                  checkButtonId={checkButtonId}
                />
{/*
                <table>
                    <tbody>
                        <tr>
                            <Buttons
                                update={update}
                                deleteHandler={deleteHandler}
                                index={active}
                                checkButtonId={checkButtonId}
                            />
                        </tr>
                    </tbody>
                </table>
*/}
                <button id="popup-close" onClick={(e) => { checkButtonId(e.target.id); update({  popup: false}) } }>Close</button>
            </div>
        )
};

export default popup;