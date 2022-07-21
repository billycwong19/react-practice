import useLocalStorage from "../hooks/useLocalStorage"

const CustomHook2 = () => {
    const [task, setTask] = useLocalStorage('task', '')
    const [tasks, setTasks] = useLocalStorage('tasks', [])

    const onSubmit = e => {
        e.preventDefault()
        const taskObj = {
            task,
            completed: false,
            date: new Date().toLocaleDateString()
        }
        setTasks([...tasks, taskObj])
    }
  return (
    <div>
        <form className='w-25' onSubmit={onSubmit}>
            <div className='mb-3'>
                <label className='form-label'>Task</label>
                <input className='form-control' type='text' value={task} onChange={(e) => setTask(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <hr />

        {tasks.map(task => {
            return (<h3 key={task.date}>{task.task}</h3>)
        })}

    </div>
  )
}

export default CustomHook2