import { useEffect } from 'react'
function LifeCycleMounting() {
    console.log('inside component')

    useEffect(() => {
        console.log('execute this after mounting')
 }, [])
 return (
    <div>
        { console.log ('inside jsx') }
        <h2>This is a component</h2>
    </div>
 )
}

export default LifeCycleMounting