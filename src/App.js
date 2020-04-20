import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sty.css';
import Studentlist from './components/Studentlist.js';
import Addstudent from './components/Addstudent.js';
import Courselist from './components/Courselist.js';
import Enrolllist from './components/Enrolllist.js';
import Addcourse from './components/Addcourse.js';
import Addenroll from './components/Addenroll.js';
import Enrollsearch from './components/Enrollsearch.js';
import Coursesearch from './components/Coursesearch.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component{

  tothelinks()
  {
    return(
      <ul >
        <Link to="/studentlist">
          <li className="thebutton">Show Student list</li>
          </Link>
          <Link to="/addstudent">
          <li className="thebutton">Add student to the student list</li>
          </Link>
          <Link to="/course">
          <li className="thebutton">Show course list</li>
          </Link>
          <Link to="/enroll">
          <li className="thebutton">show the enrollment list</li>
          </Link>
          <Link to="/addcourse">
          <li className="thebutton">Add course to course list</li>
          </Link>
          <Link to="/addenroll">
          <li className="thebutton">Add an enrollment</li>
          </Link>
          <Link to="/enrollsearch">
          <li className="thebutton">Search the enrollment</li>
          </Link>
          <Link to="/coursesearch">
          <li className="thebutton">Search the courses</li>
          </Link>
      </ul>
    )
     
  }
  wehere()
  {
    return(

    <nav>  
      <ul className="navlist">
        <Link to="/">
          <li style={{color: "white"}} >Home</li>
          </Link>
      </ul>
      </nav>
    )
     
  }
Test() {
  //const arraystudent = this.state.students.map(this.renderStudent)
    return (
      
     <Router>
       <div>
       {this.wehere()} 
     
        <Switch>
           <Route  exact path="/"  component={this.tothelinks} />
           <Route  path="/studentlist" > <Studentlist /> </Route>
           <Route  exact  path="/addstudent"> <Addstudent /> </Route>
           <Route  exact  path="/course"> <Courselist /> </Route>
           <Route  exact  path="/enroll"> <Enrolllist /> </Route>
           <Route  exact  path="/addcourse"> <Addcourse /> </Route>
           <Route  exact  path="/addenroll"> <Addenroll /> </Route>
           <Route  exact  path="/enrollsearch"> <Enrollsearch /> </Route>
           <Route  exact  path="/coursesearch"> <Coursesearch /> </Route>
         
        </Switch>
        </div>
    </Router>      
  )
}



render() {
  //const { studentss} = this.state.students;
  return (
    <div className="App">  
       {this.Test()}
        </div>
  )
}
}

export default App;
