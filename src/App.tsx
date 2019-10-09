import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//COMPONENT

import './App.css';
import Main from './components/container/main';
import User from './components/user';
import Navbar from './components/navBar';
import Register from './components/common/register';
import Login from './components/common/login';
import Posts from './components/posts';
import PostDetails from './components/postDetails';
import DataTable1 from './components/tables/dataTable1';


class App extends React.Component<any, any> {

  render(){
    return (
      <div className="App">
       {/* <h2 className="heading-appname">Todo App</h2> */}
       <Router>
       <Navbar />
         <Switch>
           <Route exact path="/" component={Main} />
           <Route exact path="/user" component={User}/>
           <Route extact path="/details/:id" component={PostDetails}/>
           <Route exact path="/post" component={Posts}/>
           <Route exact path = "/dataTable" component={DataTable1} />
           <Route exact path="/register" component={Register}/>
           <Route exact path="/login" component={Login}/>
         </Switch>
       </Router>
      </div>
    );
  }
 
}

export default App;
