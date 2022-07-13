import { useState, useEffect, useRef, useMemo } from 'react'

const UseMemoExample = () => {
    const [number, setNumber] = useState(1)
    const [increment, setIncrement] = useState(0)

    // const sqroot = getSqroot(number)
    const sqroot = useMemo(() => getSqroot(number), [number])

    const renders = useRef(1)

    useEffect(() => {
        renders.current = renders.current + 1
    })

    const onClick = () => {
        setIncrement((prev) => {
            console.log(prev + 1)
            return prev + 1
        })
    }

    return (
        <div>
            <input className='form-control w-25' type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
            <h3>Renders : {renders.current}</h3>
            <h2 className='my-3'>The square root of {number} is {sqroot}.</h2>
            <button className='btn btn-primary' onClick={() => onClick()} >Increment</button>
        </div>
  )
}

function getSqroot(n) {
    for (let i = 0; i < 100; i++) {
        console.log(i)
    }

    console.log('EXPENSIVE FUNCTION CALLED')
    return Math.sqrt(n)
}

export default UseMemoExample