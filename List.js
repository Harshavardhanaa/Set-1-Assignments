function EmployeeTable() {

    const employees = [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        department: "Sales"
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@example.com",
        department: "HR"
      },
      {
        id: 3,
        name: "Sam Wilson",
        email: "samwilson@example.com",
        department: "Finance"
      },
      {
        id: 4,
        name: "Emily Adams",
        email: "emilyadams@example.com",
        department: "IT"
      },
      {
        id: 5,
        name: "Brian Clark",
        email: "brianclark@example.com",
        department: "Marketing"
      }
    ]
  
    return (
  
      <div>
  
        <h1>Listing Employees - {employees.length}</h1>
        <table border = '6'>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>department</th>
            </tr>
          </thead>
        <tbody>
          {
            employees.map((ele) => {
              return <tr key = {ele.id}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.department}</td>
              
              </tr>
            })}
  
        </tbody>
        </table>
  
  
  
  
      </div>
    )
  
  
  }
  
  export default EmployeeTable