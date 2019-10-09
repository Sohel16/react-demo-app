import * as React from 'react';



export default class AddUser extends React.Component<any, any> {

    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    //YOU CAN PASS ANYTHING TO PROPS

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name);
        this.props.handleAddUser(this.state.name)
        this.setState({
            name:""
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.props.handleAddUser(this.state.name)
            this.setState({
                name: ''
            })
        }
    }


    render() {

        return(
        <React.Fragment>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name}  onKeyPress={this.handleKeyPress}placeholder="Add user.."/>
            <input type="button" onClick={this.handleSubmit} value="Add User"/>
        </React.Fragment>
        )}
   
}