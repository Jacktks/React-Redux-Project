import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';    

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange(event){
        const {value, name} = event.target;
        this.setState({ [name]: value })
    }
    
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="email"/>
                    <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label="password"/>

                    <CustomButton type="submit">Sign in!</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;