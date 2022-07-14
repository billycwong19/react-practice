import React, { useState, useCallback } from 'react'

const UseCallbackExample = () => {
    const [tasks, setTasks] = useState([])

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

const Button = React.memo(({ addTasks }) => {
    console.log('button render')
    return (
        <div>
            <button className='btn btn-primary' onClick={addTasks}>Add Task</button>
        </div>
    )
})

export default UseCallbackExample