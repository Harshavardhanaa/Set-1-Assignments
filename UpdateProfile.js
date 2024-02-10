import { useState } from 'react'
import Search from "./Search"
import Display from './Display'
import Form from './Form'
import _ from 'lodash'
export default function UpdateProfile(){ 
    const [user, setUser] = useState({})

    const assignUser = (user) => {
        setUser(user)   
    }

    const updateUser = (formData) => {
        const newObj = {...user, ...formData}
        setUser(newObj)
    }

    return (
        <div>
            { console.log(user) }
            <h2>Update Profile</h2>
            <Search assignUser={assignUser} />

            {!_.isEmpty(user) && (
                <div>   
                    <Display
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        city={user.address.city}
                    />

                    <Form 
                        id={user.id} 
                        name={user.name} 
                        username={user.username}
                        updateUser={updateUser}
                    />
                </div> 
            )}

            
            
        </div>
    )
}