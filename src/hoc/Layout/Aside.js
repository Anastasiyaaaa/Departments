import React from 'react';

export default ({ data }) => {
    const employees = data.map((datas, index) => {
        if (datas.employees.length >= 1) {
            return (
                <React.Fragment>
                    <tr>{datas.name}</tr>
                    { datas.employees.map((employee, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>{employee.employee.name}</td>
                                        <td>{employee.employee.email}</td>
                                        <td>{employee.employee.data}</td>
                                        <td>{employee.employee.salary}</td>
                                        <td><button>Edit</button></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    )
                    })}
                </React.Fragment>
            )
        } else {
            return ( <tr key={index}>Ни кто не рабоватает в {datas.name}</tr> )
        }
    });

    return (
        <table className="user-list table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>{data.name}</th>
                 </tr>
            </thead><tbody>{employees}</tbody>
        </table>
    );
}




