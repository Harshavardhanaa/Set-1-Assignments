import {useState, useEffect} from 'react'
import axios from 'axios'
import DisplayList from './DisplayList'
import DisplayTable from './DisplayTable'

function DisplayChoice() {
    const [choice, setChoice] = useState('list')
    const [users, setUsers] = useState([])

    
    useEffect (() => {

    
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        const result = response.data
        setUsers(result)
    })
    .catch((err) => {
        console.log(err)
    })
}, [])

    return (
        <div>
            < input type = 'radio' 
                    name = 'choice' 
                    onChange = {((e) => {setChoice('list')})}
                    checked = {choice === 'list'}/> list
            < input type = 'radio' 
                    name = 'choice' 
                    onChange = {((e) => {setChoice('table')})} 
                    checked = {choice === 'table'}/> table
            { choice === 'list' ? <DisplayList users = {users} /> : <DisplayTable users = {users} /> }
        </div>
    )
}

export default DisplayChoice