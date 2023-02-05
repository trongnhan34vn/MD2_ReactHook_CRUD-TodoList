import React, { useState } from 'react'

export default function Form(props) {
    const [newWork, setNewWork] = useState("")
    const handleChangeAddWork = (e) => {
        setNewWork(e.target.value)
    }

    const handleSubmitAddWork = () => {
        (newWork == "") ? alert("Điền vào đê!") :  props.recieveNewWork(newWork)
    }

    return (
        <div>
            <form className="todo-input-box py-xl-5">
                <h2 className="todo-input-title text-center mb-4">To Do Input</h2>
                <input
                    onChange={handleChangeAddWork}
                    className="todo-input w-100 mb-3 px-4 py-2"
                    type="text"
                    name=""
                    id=""
                />
                <button onClick={handleSubmitAddWork} type='button' className="btn btn-dark w-100 py-2">Add New Work</button>
            </form>
        </div>
    )
}
