import * as React from 'react';




export default class Register extends React.Component<any, any> {

    
 render(){
     return(
         <div className="regiter">
             
             <div className="table-wraper">
             <h3>Register</h3>
             <table className="table">
                 <tr>
                     <td>First Name</td>
                     <td><input type="text" name="fname"/></td>
                 </tr>
                 <tr>
                     <td>Last Name</td>
                     <td><input type="text" name="lname"/></td>
                 </tr>
                 <tr>
                     <td>Email</td>
                     <td><input type="text" name="email"/></td>
                 </tr>
                 <tr>
                     <td>Age</td>
                     <td><input type="text" name="age"/></td>
                 </tr>
                 <tr>
                     <td>Are you 18+ ?</td>
                     <td><input type="radio" name="confirmAge"/>Yes <input type="radio" name="confirmAge"/>No</td>
                 </tr>
                 <tr><td>{""}</td> <td><input style={{width:"175px"}} type="button" value="Register"/></td></tr>
             </table>
             </div>
             
         </div>
     )
 }
}