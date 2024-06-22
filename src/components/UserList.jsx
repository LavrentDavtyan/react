import Types from "prop-types"


export const UserList = ({users, onDelete, onSalaryUp}) => {

    return <div>
        <h1>UserList</h1>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>salary</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(elm=> <tr key={elm.id} style={elm.salary >= 80000 ? { color: 'red' } : {}}>
                        <td>{elm.name}</td>
                        <td>{elm.surname}</td>
                        <td>{elm.salary}</td>
                        <td>{elm.name}</td>
                        <td>
                            <button onClick={()=> onDelete(elm.id) }>Delete</button>
                            <button onClick={() => onSalaryUp(elm.id)}>Salary up</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

UserList.propTypes ={
    users: Types.arrayOf(
        Types.exact({
            id:Types.string,
            name: Types.string,
            surname: Types.string,
            salary: Types.number,
        })
    ),
    onDelete:Types.func
}