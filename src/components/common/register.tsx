import * as React from 'react';




export default class Register extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                firstname: "",
                lastname: "",
                email: "",
                username: "",
                password: "",
                age: "",
                terms: false
            },
            isFormValid: true,
            errors: {}
        }
    }


    validationSchema = {
        data: {
            firstname: {
                required: true,
                minLength: 4,
                maxLength: 20
            },
            lastname: {
                required: true,
                minLength: 4,
                maxLength: 20
            },
            username: {
                required: true,
                minLength: 4,
                maxLength: 20
            },
            email: {
                required: true,
                minLength: 4,
                maxLength: 20
            },
            password: {
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            },
            terms: {
                required: false
            }
        }

    }

    handleChange = (e) => {
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
            data: {...this.state.data, [name]: value},
            errors
        })

    }

    validateField = (field:string, value:any)=>{
        let isValid = true;
        let message:any = null;
        const validationRules = this.validationSchema.data[field]; 
        if(validationRules){
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
        }
       
        return {isValid, message}
    }
  
    
    validateRegisterField = (formData) => {  // {username:'rr', password:'pp'}
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


    handleSubmit = (e) => {
        e.preventDefault();
        const validationRes = this.validateRegisterField(this.state.data);
       console.log(validationRes.errors, 'validationRes errros')
       if(!validationRes.isValid) {
           alert('Please check the validation errors')
           this.setState({
               errors: validationRes.errors
           })
           return;
       }
       // Do api call to login user
       console.log(this.state.data)
       
    }
    
 render(){
     const { errors } = this.state;
     return(
         <div className="regiter">
             
             <div className="table-wraper">
             <h3>Register</h3>
             <table className="table">
                 <tr>
                     <td>First Name</td>
                     <td><input type="text" name="firstname" onChange={this.handleChange}/>
                     {errors && errors.firstname}
                     
                     </td>
                 </tr>
                 <tr>
                     <td>Last Name</td>
                     <td><input type="text" name="lastname" onChange={this.handleChange}/>
                     {errors && errors.lastname}</td>
                    
                 </tr>
                 <tr>
                     <td>Username</td>
                     <td><input type="text" name="username" onChange={this.handleChange}/>
                     {errors && errors.username}
                     </td>
                     
                 </tr>
                 <tr>
                     <td>Email</td>
                     <td><input type="text" name="email" onChange={this.handleChange}/>
                     {errors && errors.email}
                     </td>
                 </tr>
                 <tr>
                     <td>Password</td>
                     <td><input type="text" name="password" onChange={this.handleChange}/>
                     {errors && errors.passwrod}
                     
                     </td>
                 </tr>
                 <tr>
                     <td>Age</td>
                     <td><input type="text" name="age" onChange={this.handleChange}/>
                     {errors && errors.age}
                     
                     </td>
                 </tr>
                 <tr>
                     <td>Aggree to Terms & Conditions?</td>
                     <td><input type="radio" name="confirmAge" value={1}/>Yes <input type="radio" name="confirmAge" onChange={this.handleChange} value={0}/>No</td>
                 </tr>
                 <tr><td>{""}</td> <td><input style={{width:"175px"}} type="button" value="Register" onClick={this.handleSubmit}/></td></tr>
             </table>
             </div>
             
         </div>
     )
 }
}