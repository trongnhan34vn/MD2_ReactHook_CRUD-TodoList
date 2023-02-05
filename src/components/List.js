import React, { useState } from 'react'
import Edit from './Edit'

export default function List(props) {
    const [idEdit, setIdEdit] = useState("")
    const listWork = props.listWork.map((work, index) => {
        return <tr key={index} className="todo-item text-center">
            <td width="10%">{index + 1}</td>
            <td
                width="60%"
                className="text-left d-flex justify-content-between align-items-center w-100 p-4"
            >
                <span>{work.taskName}</span>
                <Edit listWork={props.listWork} setIdEdit={setIdEdit} idEdit={idEdit} id={work.taskId}/>
            </td>
            <td width="30%">
                <button onClick={() => handleEditBox(work.taskId)} className="btn btn-info mr-2">Edit</button>
                <button onClick={() => handleDel(work.taskId)} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    })
    const handleEditBox = (taskId) => {
        (idEdit !== taskId) ? setIdEdit(taskId) : setIdEdit("")
    }
    const handleDel = (idDel) => {
        props.recieveIdDel(idDel)
    }
    return (
        <div>
            <div className="todo-list-box">
                <h2 className="to-do-list-title text-center mb-4">To Do List</h2>
                <table className="todo-list w-100 table table-striped table-hover align-middle">
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th className="text-left">Tasks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listWork}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
