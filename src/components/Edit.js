import React, { useEffect, useState } from 'react'
import { editTaskName } from '../App'
import { useContext } from 'react'

export default function Edit(props) {
    const [inputValue, setInputValue] = useState("")
    const handleCloseEdit = () => {
      props.setIdEdit("")
    }
    const handleChangeEdit = (e) => {
      setInputValue(e.target.value)
    }
    useEffect(() => {
        // Khi bấm vào btn Edit thì idEdit khác rỗng và set giá trị đầu vào cho ô input = taskName của phần tử thứ idEdit(số thứ tự) - 1
        props.idEdit !== "" ? setInputValue(props.listWork[props.idEdit - 1].taskName) : setInputValue("")
    },[props.idEdit])

    const editTask = useContext(editTaskName)

    const handleSubmitEdit = (id) => {
        const newArr = [...props.listWork];
        newArr[id - 1].taskName = inputValue;
        editTask(newArr);
        handleCloseEdit();
    }
    return (
        <div>
            <div className={`todo-edit-task d-flex ${(props.idEdit == props.id ? "isEdit" : "isNonEdit")}`}>
                <input onChange={handleChangeEdit} type="text" name="" value={inputValue} className="" />
                <button onClick={() => handleSubmitEdit(props.idEdit)} className="btn btn-success">
                    <i className="bi bi-check-lg" />
                </button>
                <button onClick={handleCloseEdit} className="btn btn-warning">
                    <i className="bi bi-x-lg" />
                </button>
            </div>
        </div>
    )
}
