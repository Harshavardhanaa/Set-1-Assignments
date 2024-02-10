function DisplayTable(props) {
    const { users } = props
    return (
        <div>
            <table border = "1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((ele) => {
                        return (
                            <tr>
                                <td>{ele.username}</td>
                                <td>{ele.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )


}

export default DisplayTable