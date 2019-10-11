import * as React from 'react';




export default class Login extends React.Component<any, any> {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            errors: {}
        }
    }

    validationSchema = {
        username: {
            required: true,
            minLength: 4,
            maxLength: 20
        },
        password: {
            required: true,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        }

    }

    handleChange = (e) => {
        const {name, value} = e.target
        const {errors}= this.state;
        const validationDetails = this.validateField(name, value)
        const validationErrors = {}

        if(!validationDetails.isValid) { 
            validationErrors[name] = validationDetails.message
        } 
        else if(validationDetails.isValid && errors){
            errors[name] = null
        }
    
        
        this.setState({
            [name]: value,
            errors: {...this.state.errors, ...validationErrors}
        })

    }

    validateField = (field:string, value:any)=>{
        let isValid = true;
        let message:any = null;
        const validationRules = this.validationSchema[field]; 
        if(validationRules.required && !value) {
            isValid = false;
            message = `${field} is required`
        }
        if(isValid && validationRules.minLength && value.length < validationRules.minLength) {
            isValid = false;
            message = `Min length should be ${validationRules.minLength}`
        }

        if(isValid && validationRules.pattern && validationRules.pattern.test(value) == false) {
            isValid = false;
            message = `Follow the pattern`;
        }
        return {isValid, message}
    }


    
    handleSubmit = (e) => {

    }



 render(){
     const {errors}= this.state
     return(
         <div className="register">
             <div className="table-wraper">
                 <h3>Login</h3>
             <table className="table">
                 <tr>
                     <td>Username</td>
                     <td><input type="text" name="username" onChange={this.handleChange}/>
                        {(errors && errors.username) ? errors.username: ''}
                     </td>
                 </tr>
                 <tr>
                     <td>Password</td>
                     <td><input type="text" name="password" onChange={this.handleChange}/>
                     {(errors && errors.password) ? errors.password: ''}
                     </td>
                 </tr>
                 
                 <tr><td>{""}</td> <td><input style={{width:"175px"}} type="button" value="Login" onClick={this.handleSubmit}/></td></tr>
             </table>
             </div>
             
         </div>
     )
 }
}