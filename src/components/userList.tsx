import * as React from 'react';



/*
Create another component 'UserRow'
api call & display data
pagination...5 rows per page ...back & forward button...display 1-5 of total 15
multiple delete and check all with checkbox 
add, delete, edit & update after checking radio or checkbox
sorting (ascending, descending,...), filter depending on selection of options
Add validation
Add services for calling api and maintain business logic
Add redux, redux saga
Add signup, login with 2 roles like Admin, Normal user
Role based authorisation
Use mock api: https://reqres.in/

*/

const UserList: React.FC<any> = (props) => {
     const {users, onDelete, onUpdate } = props;

        const user = users ? users.map((usr, i) => {
            return (<tr key={i}>
                <td><input type="text" name="usr" value={usr}/></td>
                <td><input className="cancel-user" onClick = { () => onUpdate(i) } type="button" value="Update" /></td>
                <td><input className="update-user" onClick = { () => onDelete(usr) } type="button" value="X" /></td>
            </tr>)
            
        }): ""

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>{""}</th>
                        <th>{""}</th>
                    </tr>
                </thead>

                <tbody>
                    {user}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;