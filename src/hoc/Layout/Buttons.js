import React from 'react';

const buttons = ({ update, index, deleteHandler, deleteHandlerB, checkButtonId, dataEmployeeId,deleteEmployeeFun}) => {
    return (
        <React.Fragment>
            <td><button data-index={dataEmployeeId} id="buttonEdit" onClick={(e) => { checkButtonId(e.target.id); update({ popup: true  }) }}>Edit</button></td>
            {/*<td><button id="buttonAdd" onClick={(e) => { checkButtonId(e.target.id); update({ popup: true  }) }}> Add </button></td>*/}
            <td><button data-index={dataEmployeeId} id="buttonRemove" onClick={() => { deleteHandler (index) }}> Remove </button></td>
            <td><button id="buttonList" onClick={(e) => { checkButtonId(e.target.id); update({ active: index,  popup: true  }) }}> Список </button></td>
        </React.Fragment>
    )
};

export default buttons;