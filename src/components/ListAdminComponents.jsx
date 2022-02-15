import React, { Component } from 'react'
import AdminService from '../services/AdminService';

export default class ListAdminComponents extends Component {
    constructor(props){
        super(props);
        this.state={
            patients:[]
        }
        this.addUser = this.addUser.bind(this);
        this.editPatients = this.editPatients.bind(this);
        this.deletePatients = this.deletePatients.bind(this);
        this.login = this.login.bind(this);
    }

    deletePatients(id){
        AdminService.deletePatients(id).then( (response) => {
            this.setState({patients: this.state.patients.filter(patient => patient.id !== id)});
        });
    }

    //viewRegistration(userId){
     //   this.props.history.push(`/view-user/${userId}`);}  

    editPatients(id){
        this.props.history.push(`/update-user/${id}`);
    }

    componentDidMount(){
        AdminService.getPatients().then((response) => {
            this.setState({ patients : response.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user');
    }

    login(){
        this.props.history.push('/login-form');
    }

  render() {
    return (
      <div>
          <h2 className="text-center" style={{fontFamily : 'sans-serif'}}>Patients List</h2>
                <button className="btn btn-lg btn-primary" onClick={this.addUser}> Sign Up </button>
                <button style = {{marginLeft: "1099px"}} className="btn btn-lg btn-success" onClick = {this.login}>Log In</button>
          <div className="row">
          </div><br/>
          <div className="row">
              <table className="table table-striped table-bordered">
                  <thead>
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Email Id</th>
                          <th>Gender</th>
                          <th>Mobile Number</th>
                          <th>Password</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.patients.map(
                              patient =>
                              <tr key = {patient.id}>
                                  <td> {patient.id} </td>
                                  <td> {patient.name} </td>
                                  <td> {patient.email} </td>
                                  <td> {patient.gender} </td>
                                  <td> {patient.mobile} </td>
                                  <td> {patient.password} </td>
                                  <td>
                                      <button onClick = { () => this.editPatients(patient.id)} className = "btn btn-info">Update</button>
                                      <button style = {{marginLeft: "10px"}} onClick = { () => this.deletePatients(patient.id)} className = "btn btn-danger">Delete</button>
                                    {/*  <button style = {{marginLeft: "10px"}} onClick = { () => this.viewRegistration(register.userId)} className = "btn btn-info">View</button> */}
                                  </td>
                              </tr>
                          )
                      }
                  </tbody>
              </table>
          </div>
      </div>
    )
  }
}