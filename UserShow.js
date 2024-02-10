import { useState, useEffect } from 'react'
import axios from 'axios'
function UserShow() {
    
    const[ id, setId] = useState('')
    const[user, setUser] = useState({})
    const[error, setError] = useState('')
    const[todos, setTodos] = useState([])

    useEffect(() => {
        if(Object.keys(user).length > 0){
            axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
            .then((response) => {
                setTodos(response.data)

            })
            .catch((err) => {
                console.log(err)
            })

        }
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(id){
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const result = response.data
                setUser(result)
                setError('')
            })
            .catch((err) => {
                setError(err.message)
            setUser({})            
            })

        }
    }

    function calcPercent() {
        const completedTask = todos.filter(ele => ele.completed)
        const percent = completedTask.length / todos.length * 100
        return percent
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Enter ID
                <input type = 'text' 
                        value = {id}
                        onChange = {(e) => {setId(e.target.value)}} 
                />
                </label>
                <input type = 'submit' />

            </form>
            {Object.keys(user).length > 0 && (
                <div>
                    <h2>{user.username}</h2>
                    <p>{user.email}</p>
                    <h3>Total todos {todos.length}</h3>
                    <p>Completed - {todos.filter(ele => ele.completed).length} && 
                       Incomplete - {todos.filter(ele => !ele.completed).length}</p>
                <progress  value = {calcPercent()} title = {`${calcPercent()}%`} max = '100'></progress>
                </div>
            )}

            {error && <p>{error}</p>}
        </div>
    )
}

export default UserShow