function DisplayList(props) {
    const { users } = props

    return (
        <div>
            <ul>
                { users.map((ele) => {
                    return <li key = {ele.id}>{ele.name}- {ele.email}</li>
                })}
            </ul>
        </div>
    )

}
export default DisplayList