import {Component} from 'react';
import {signUp} from '../../utilities/users-service';


export default class SignUpForm extends Component {
    // // state is always an object with a property for each "piece" of state
    // constructor() {
    //   super();
    //   this.state = {
    //     name: '',
    //     email: '',
    //     password: '',
    //     confirm: '',
    //     error: ''
    //   };
    //   this.handleChange = this.handleChange.bind(this)
    // }

    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            // alert(JSON.stringify(this.state));
            const formData = {...this.state};
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.props.setUser(user);
        } catch {
            this.setState({
                error: 'Sign Up Failed - Try Again'
            });
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                <h5>Already have an account? Click above to log in.</h5>
                <h2>Please sign up</h2>

                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" placeholder='Enter Name' value={this.state.name} onChange={this.handleChange} required/>
                        <label>Email</label>
                        <input type="email" name="email" placeholder='Enter Email' value={this.state.email} onChange={this.handleChange}
                               required/>
                        <label>Password</label>
                        <input type="password" name="password" placeholder='Enter Password' value={this.state.password} onChange={this.handleChange}
                               required/>
                        <label>Confirm</label>
                        <input type="password" name="confirm" placeholder='Re-enter Password' value={this.state.confirm} onChange={this.handleChange}
                               required/>
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }

};
