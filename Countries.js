import { useState } from 'react'
import axios from 'axios'
export default function Countries() {
    const [name, setName] = useState('')
    const [countries, setCountries] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://restcountries.com/v3.1/name/${name}?fields=name,capital`)
        .then((response) => {
            const result = response.data
            const Obj = {
                name: result[0].name.common,
                capital: result[0].capital[0]
            }
            const newArr = [...countries, Obj]
            setCountries(newArr)
            setName('')
        })
        .catch((ERR) => {
            console.log(ERR.message)
        })
    }

    return (
        <div>
         <form onSubmit = {handleSubmit} > 
            <label>
                Enter Name
                <input 
                    type = 'text'
                    value = {name}
                    onChange = { (e) => {setName(e.target.value )}}
                />            
            </label>
            <input type = "submit" />

         </form>
         {countries.length > 0 && (
            <div>
                <table border = '1'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Capital</th>
                        </tr>

                    </thead>
                    <tbody>
                        {countries.map((ele, i) => {
                            return (
                                <tr key = {i}>
                                    <td>{ele.name}</td>
                                    <td>{ele.capital}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
         )}
        </div>
    )
}