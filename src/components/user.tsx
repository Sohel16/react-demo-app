import * as React from 'react';

import AddUser from './addUser';
import UserList from './userList';

interface Userlist {
    users: any[],  
  }

export default class User extends React.Component<any, Userlist> {

    constructor(props: any){
        super(props);
            this.state = {
                users: []
            }
    }

    // Adding user

    handleAddUser = (user) => {
       // const { users } = this.state;
     
        const userUpercase = user.toUpperCase()
        if(userUpercase !== ""){
            // const newItem = [...users, userUpercase]
            let newUsers = [...this.state.users];
                newUsers.push(userUpercase)
            this.setState({
                users: newUsers
            })
        }
       
    }

    // Deleting user by index

    handleUserDelete = (user) => {
        let newUsers = [...this.state.users];
        let index = newUsers.indexOf(user)
        if(index !== -1){
            newUsers.splice(index, 1);
            this.setState({
                users:newUsers
            })
        }}
    

    // Updating user 
    handleUserUpdate = (user) => {
        console.log('updated')
    }

    render() {

        const { users } = this.state;
        console.log(this.state.users)
     
        return(
        <React.Fragment>
            <p>USER LIST</p>
            <div style={{width: "500px", margin:"0 auto", borderBottom: "2px solid green", marginBottom:"20px"}}>
                <UserList 
                    users = { users }
                    onDelete = { this.handleUserDelete }
                    onUpdate = { this.handleUserUpdate }
                />
           
            </div>
         
            <AddUser 
                handleAddUser = {this.handleAddUser}
            />
        </React.Fragment>
        )}
   
}