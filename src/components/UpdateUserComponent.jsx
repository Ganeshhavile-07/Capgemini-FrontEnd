import React, { Component } from 'react'
import AdminService from '../services/AdminService';

export default class UpdateUserComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            name:'',
            email:'',
            gender:'',
            mobile:'',
            password:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.updatePatients = this.updatePatients.bind(this);
    }

    
    componentDidMount(){
        AdminService.getPatientById(this.state.id).then( (response) => {
            let patient = response.data;
            this.setState({name : patient.name, 
                            email : patient.email, 
                            gender : patient.gender,
                            mobile : patient.mobile, 
                            password : register.password 
                        });
        });
    }

    updatePatients = (e) => {
        e.preventDefault();
        let patient = {name : this.state.name, 
                        email : this.state.email,
                        gender : this.state.gender,
                        mobile : this.state.mobile,
                        password : this.state.password
                    };
        console.log('patient => ' + JSON.stringify(patient));
        AdminService.updatePatients(patient, this.state.id).then( response => {
            this.props.history.push('/patients');
        });
    }

    changeNameHandler = (event) => {
        this.setState({name : event.target.value});
    }

    changeEmailIdHandler = (event) => {
        this.setState({email : event.target.value})
    }

    changeGenderHandler = (event) => {
        this.setState({gender : event.target.value})
    }

    changeMobileNumberHandler = (event) => {
        this.setState({mobile : event.target.value})
    }

    changePasswordHandler = (event) => {
        this.setState({password : event.target.value})
    }

    cancel(){
        this.props.history.push('/users');
    }

  render() {
    return (
        <div className="padding container d-flex justify-content-center">
            <div className="col-md-10 col-md-offset-1">
                <form className="signup-form">
                <h2 className="text-center">Update Form</h2>
                <hr />
                    <div className="form-group">
                        <input type="text" maxLength={25} className="form-control" placeholder="Name" 
                        value={this.state.name} onChange={this.changeNameHandler} required="" /> 
                    </div>
                    <br/>

                    <div className="form-group">
                        <input type="text" maxLength={15} className="form-control" placeholder="Email Id" 
                        value={this.state.email} onChange={this.changeEmailIdHandler} required="required" /> 
                    </div>
                    <br/>

                    <div className="form-group">
                        <input type="gender" className="form-control" placeholder="Gender" 
                        value={this.state.gender} onChange={this.changeGenderHandler} required="required" /> 
                    </div>
                    <br/>

                    {/*<div class="form-group"> 
                        <input type="text" class="form-control" placeholder="Dabba Id" required="required"> </div> */}
                    <div className="form-group"> 
                    {/*<input type="password" class="form-control" placeholder="xxxxxx" required="required"> </div> */}
                        <input type="password" className="form-controll" placeholder="Password" value={this.state.password} onChange={this.changePasswordHandler} name="password" autoComplete="current-password" required id="id_password" />
                        <i className="far fa-eye" id="togglePassword" style={{marginLeft: '-30px', cursor: 'pointer'}} />
                    <br/>

                    <div className="form-group"> 
                        <input type="number" maxLength={10} className="form-control" placeholder="Contact Number" 
                        value={this.state.mobile} onChange={this.changeMobileNumberHandler} required="required" /> </div>
                    <br/>

                    <div className="form-group text-center"> 
                        <button type="submit" className="btn btn-success" onClick={this.updatePatients}>Save</button> </div>
                    </div>
            </form>
        </div>
    </div>
    )
  }
}