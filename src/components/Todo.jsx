export const Todo = () => {
    return (
        <div className="text-white">
            <h1 className="text-center text-5xl">Lista de Tarefas</h1>
            <div className="flex items-center justify-center">
                <div className="flex gap-3 bg-slate-700 rounded-md p-8 mt-10">
                    <input className="text-black rounded-md w-80" type="text" name="test" id="" />
                    <input className="border-2 border-solid border-red-700 rounded-lg" type="submit" value="Adicionar" />
                    <ul>
                        <li>Lista de tarefas</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}