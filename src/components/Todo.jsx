
import { TaskList } from "./TaskList";
import { useState } from "react";
export const Todo = () => {
  const [todoInput, setTodoInput] = useState('')
  const [list, setList] = useState([
    { label: 'Fazer dever de casa', checked: false },
    { label: 'Fazer o bolo', checked: false },
  ])

  function handleGetData(e) {
    setTodoInput(e.target.value)
  }
  console.log(todoInput)

  function handleAddData() {
    setList({ ...list, label: todoInput })
    {
      list.map((item) => {
        return <TaskList taskData={item.label} />
      })
    }
  }
  console.log(list)
  return (
    <div className="text-white p-2">
      <h1 className="text-center text-5xl">Lista de Tarefas</h1>
      <div className="flex items-center justify-center flex-col">
        <div className="flex gap-3 bg-slate-700 rounded-md p-8 mt-10 ">
          <input
            className="text-black rounded-md w-80 border-white border-solid"
            type="text"
            name="test"
            id=""
            placeholder="O que deseja fazer?"
            value={todoInput}
            onChange={handleGetData}
          />
          <input
            className="border-2 border-solid bg-slate-700 px-1 rounded-lg"
            type="submit"
            value="Adicionar"
            onClick={handleAddData}
          />
        </div>
        <ul>
          {handleAddData}
        </ul>
      </div>
    </div>
  );
};
