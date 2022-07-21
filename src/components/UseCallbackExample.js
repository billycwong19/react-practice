import React, { useState, useCallback } from 'react'

const UseCallbackExample = () => {
    // intialize tasks and setTasks with useState
    const [tasks, setTasks] = useState([])
    // initialize callback to setTasks to previous tasks and a new 'some task' string, which is dependent on setTasks to trigger addTasks function
    const addTasks = useCallback(() => {
        setTasks(prev => [...prev, 'Some Task'])
    }, [setTasks])

    return (
    <div>
        <Button addTasks={addTasks} />
        {tasks.map((task, i) => 
            <p key={i}>{task}</p>
        )}
    </div>
  )
}
// wrap the button in Reac.memo to memoize the button so it does not re render on click
const Button = React.memo(({ addTasks }) => {
    console.log('button render')
    return (
        <div>
            <button className='btn btn-primary' onClick={addTasks}>Add Task</button>
        </div>
    )
})

export default UseCallbackExample