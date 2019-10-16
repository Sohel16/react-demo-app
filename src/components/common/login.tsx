import * as React from 'react';


const userInfo = {
    username: "",
    password: ""
}

export default class Login extends React.Component<any, any> {

    constructor(props) {
        super(props)
        this.state = {
            userCredentials: userInfo,
            errors: {},
            isFormValid: true,
            remberUsername: false
        }
    }

    validationSchema = {
        userCredentials: {
            username: {
                required: true,
                minLength: 4,
                maxLength: 20
            },
            password: {
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            },
            remberUsername: {
                required: false
            }
        }

    }

    handleChange = (e) => {
        const remberUsername = this.state.remberUsername;
        const {name, value} = e.target
       // const name = e.target;
       // const value = e.target.type === "checkbox"? e.target.checked: e.target.value;
        const errors = {...this.state.errors}
        const validationDetails = this.validateField(name, value);

        if(!validationDetails.isValid) { 
            errors[name] = validationDetails.message
        } 
        else if(validationDetails.isValid && errors){
            errors[name] = null
        }
        this.setState({
            userCredentials: {...this.state.userCredentials, [name]: value},
            remberUsername: !remberUsername,
            errors
        })

    }

    validateField = (field:string, value:any)=>{
        let isValid = true;
        let message:any = null;
        const validationRules = this.validationSchema.userCredentials[field]; 
        if(validationRules.required && !value) {
            isValid = false;
            message = `${field} is required`;
        }
        if(isValid && validationRules.minLength && value.length < validationRules.minLength) {
            isValid = false;
            message = `Min length should be ${validationRules.minLength}`
        }

        if(isValid && validationRules.pattern && validationRules.pattern.test(value) === false) {
            isValid = false;
            message = `Follow the pattern`;
        }
        return {isValid, message}
    }



    // handleChange = (e) => {
    //     const {name, value} = e.target 
    //     this.validateProperty(name, value);
    //     this.setState({
    //         [name]: value
    //     })

    // }


    // validateProperty = (field: string, value: string) => {
    //     const errors = {...this.state.errors}
    //     let isFormValid = true;
    //     let validations = this.validationSchema[field];

    //     if(validations.required && !value) {
    //         isFormValid = false;
    //         errors[field] = `${field} is required`;
    //     } 
    //     if(isFormValid && validations.minLength && value.length < validations.minLength ) {
    //         errors[field] = `Min length should be ${validations.minLength}`;
    //     } else {
    //         errors[field] = null
    //     }

    //     this.setState({
    //         errors
    //     })
    //     return isFormValid;
    // }



    // validate = (formData): any => {
    //     let isError = false;
    //     const {username, password}= formData;
    //     let errors = {}
    //    if(!formData['username']){
    //        isError = true;
    //        errors["username"] = "Username is required";
    //    }
    //    if(username && username.length < 3){
    //     isError = true;
    //     errors["username"] = "Username minimum length should be 3";
    //     }
    //    if(!formData['password']){
    //        isError = true;
    //        errors["password"] = "Password is required";
    //    }
    //    if(password && isNaN(password)){
    //        isError = true;
    //        errors["password"] = "Only Numbers allowed";
    //    }
    // return {errors, isError};
    // }
  
    validateLoginField = (formData) => {  // {username:'rr', password:'pp'}
       let errors = {};
       let isValid = true;

       const fieldKeys = Object.keys(formData); // ['username','password']
            fieldKeys.forEach(field => {
               const fieldValidationRes = this.validateField(field, formData[field]);
               if(!fieldValidationRes.isValid) {
                   isValid = false;
                   errors[field] = fieldValidationRes.message;
               }
            });

            return {
                errors,
                isValid
            }

    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const validationRes = this.validate(this.state.userCredentials);
    //    console.log(validationRes.errors, 'validationRes errros')
    //    if(validationRes.isError) {
    //        this.setState({
    //            errors: validationRes.errors
    //        })
    //    } else {
    //        console.log(this.state.userCredentials)
    //    }
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        const validationRes = this.validateLoginField(this.state.userCredentials);
       console.log(validationRes.errors, 'validationRes errros')
       if(!validationRes.isValid) {
           alert('Please check the validation errors')
           this.setState({
               errors: validationRes.errors
           })
           return;
       }
       // Do api call to login user
       console.log(this.state.userCredentials)
       
    }


 render(){
     const {errors, remberUsername}= this.state;
     return(
         <div className="register">
             <div className="table-wraper">
                 <h3>Login</h3>
             <table className="table">
                 <tr>
                     <td>Username</td>
                     <td><input type="text" name="username" onChange={this.handleChange}/>
                        <span style={{color:'red'}}>{(errors && errors.username) ? errors.username: ''}</span>
                     </td>
                 </tr>
                 <tr>
                     <td>Password</td>
                     <td><input type="text" name="password" onChange={this.handleChange}/>
                     <span style={{color:'red'}}>{(errors && errors.password) ? errors.password: ''}</span>
                     </td>
                 </tr>
                 <tr>
                     <td>Rembember Username ?</td>
                     <td><input type="checkbox" name="remberUsername" onChange={this.handleChange} checked={this.state.remberUsername}/>
                     </td>
                 </tr>
                 
                 <tr><td style={{color:"blue"}}>{remberUsername? "Thanks !": ""}</td> <td><input style={{width:"175px"}} type="button" value="Login" onClick={this.handleSubmit}/></td></tr>
             </table>
             </div>
             
         </div>
     )
 }
}