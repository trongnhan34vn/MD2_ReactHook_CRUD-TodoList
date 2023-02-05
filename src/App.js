import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { createContext, useState } from 'react';

export const editTaskName = createContext()
function App() {
  const [listWork, setListWork] = useState([
    {
      taskId: 1,
      taskName: "Practice React Code"
    },
    {
      taskId: 2,
      taskName: "Practice Java Code"
    },
    {
      taskId: 3,
      taskName: "Practice Sleep"
    }
  ])
  const recieveNewWork = (dataNewWork) => {
    const newWork = {
      taskId: listWork.length + 1,
      taskName: dataNewWork
    }
    setListWork([...listWork, newWork])
  }

  console.log(listWork);

  const recieveIdDel = (dataIdDel) => {
    console.log(dataIdDel);
    const remainArr = listWork.filter((work) => work.taskId !== dataIdDel)
    for (let i = 0; i < remainArr.length; i++) {
      remainArr[i].taskId = i + 1;
    }
    setListWork(remainArr)
  }
  return (
    <div className="container">
      {/* Form */}
      <Form recieveNewWork={recieveNewWork} />
      {/* Form */}
      {/* List */}
      <editTaskName.Provider value={setListWork}>
        <List recieveIdDel={recieveIdDel} listWork={listWork} />
      </editTaskName.Provider>
      {/* List */}
    </div>
  );
}

export default App;
