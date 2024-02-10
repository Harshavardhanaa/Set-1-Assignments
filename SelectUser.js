import { useState, useEffect } from 'react'
import axios from 'axios'
function SelectUser() {
    const [id,setId] = useState('')
    const [user, setUser] = useState({})
    const ids = [1,2,3,4,5,6,7,8,9,10]

    useEffect (() => {
        if(id) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const result = response.data
                setUser(result)
            })
            .catch((err)=> {
                console.log(err)
            })
        } else {
            setUser({})

        }

    }, [id])

    return (
        <div>
            <select value = {id} onChange = {(e) => {setId(e.target.value)}}>
                <option value = "">Select user</option>
                { ids.map((ele, i) => {
                    return <option key = {i} value = {ele}>{ele}</option>
                })}

            </select>
            {Object.keys(user).length > 0 && (
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )}
        </div>
    )

}

export default SelectUser