import { useRef } from 'react'

const UseRefExample1 = () => {
    const inputRef = useRef()
    const onSubmit = e => {
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name</label>
            <input 
            type='text'
            ref={inputRef}
            id='name' 
            className='form-control mb-2' />
            <button type='submit' className='btn btn-primary'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default UseRefExample1