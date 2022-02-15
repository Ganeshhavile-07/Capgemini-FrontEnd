import React,{Component} from "react";

export default class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    changeEmailIdHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

  render() {
    return (
        <div className="padding container d-flex justify-content-center">
        <div className="col-md-10 col-md-offset-1">
          <form className="signin-form">
            <h2 className="text-center">Login Form </h2>
            <hr />
            <div className="form-group"> 
              <input type="text" className="form-control" placeholder="Email Id" 
              value={this.state.email} onChange={this.changeEmailIdHandler} required="required" /> </div>
            <br/>
            <div className="form-group"> 
              {/*<input type="password" class="form-control" placeholder="xxxxxx" required="required"> </div> */}
              <input type="password" className="form-controll" placeholder="Password" value={this.state.password} onChange={this.changePasswordHandler} name="password" autoComplete="current-password" required id="id_password" />
              <i className="far fa-eye" id="togglePassword" style={{marginLeft: '-30px', cursor: 'pointer'}} />
            <br/>
            <div className="form-group text-center"> 
                <button type="submit" className="btn btn btn-primary">Log In</button> </div>
              <p style={{textAlign: 'center', fontSize: '20px', fontFamily: 'Arial, Helvetica, sans-serif'}}>If you are new user? <a href="./add-user">signup</a></p>    
            </div></form>
        </div>
      </div>
    )
  }
}