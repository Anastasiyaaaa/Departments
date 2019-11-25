import React from 'react';

const buttons = ({ update, index, deleteHandlerE, checkButtonId, dataEmployeeId}) => {
    return (
        <React.Fragment>
            <td><button data-index={dataEmployeeId} id="buttonEdit"
                        onClick={(e) => { checkButtonId(e.target.id); update({ popup: true  }) }}>Edit</button></td>
            <td><button data-index={dataEmployeeId} id="buttonRemove" onClick={() => { deleteHandlerE (index) }}> Remove </button></td>
        </React.Fragment>
    )
};

export default buttons;