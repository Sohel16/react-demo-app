import * as React from 'react';




export default class Login extends React.Component<any, any> {

    
 render(){
     return(
         <div className="register">
             <div className="table-wraper">
                 <h3>Login</h3>
             <table className="table">
                 <tr>
                     <td>Username</td>
                     <td><input type="text" name="username"/></td>
                 </tr>
                 <tr>
                     <td>Password</td>
                     <td><input type="text" name="password"/></td>
                 </tr>
                 
                 <tr><td>{""}</td> <td><input style={{width:"175px"}} type="button" value="Login"/></td></tr>
             </table>
             </div>
             
         </div>
     )
 }
}