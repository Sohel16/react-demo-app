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
import 'bootstrap/dist/css/bootstrap.min.css';
import Players from './components/cricketers/cricketers.component'

class App extends React.Component<any, any> {

  render(){
    return (
      <div className="main-wraper">
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
           <Route exact path="/players" component={Players}/>
         </Switch>
       </Router>
       <footer>
          <div className="footer-top">
          <div className="post-footer">
                     <h4>Follow on-</h4>
                     <a href="#">YouTube</a>
                     <a href="#">Facebook</a>
                     <a href="#">Instragram</a>
                 </div>
          </div>
          <div className="footer-bottom"></div>
        </footer>
      </div>
    );
  }
 
}

export default App;
