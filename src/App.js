import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListAdminComponents from './components/ListAdminComponents';
import CreateUserComponent from './components/CreateUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <div>
      <Router>
            <HeaderComponent/>
              <div className="container">
                  <Switch> 
                        <Route path = "/" exact component = {ListAdminComponents}></Route>
                        <Route path = "/users" component = {ListAdminComponents} ></Route>
                        <Route path = "/add-user" component = {CreateUserComponent}></Route>
                        <Route path = "/update-user/:id" component = {UpdateUserComponent}></Route>
                        <Route path = "/login-form" component = {LoginForm}></Route>
                       {/* <Route path = "/view-user/:userId" component = { ViewUserComponent }></Route> */}
                        <ListAdminComponents/>
                        <CreateUserComponent/>
                        <UpdateUserComponent/>
                        <LoginForm/>
                      {/*  <ViewUserComponent/> */}
                  </Switch>
              </div>
            <FooterComponent/>
      </Router>
    </div>
  );
}


export default App;
