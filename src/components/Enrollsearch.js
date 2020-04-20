import React from "react"
import Studentlist from './Studentlist.js';
import Enrolllist from './Enrolllist.js';
import './compstyle.css';
import * as ReactBootStrap from "react-bootstrap";
class Enrollsearch extends React.Component {
    constructor(props) {
        super(props)
      this.state = {
        studentlist:[],
        studentname:"",
       
         }
    
         this.searchstudent = this.searchstudent.bind(this)
         this.thefre = this.thefre.bind(this)
         this.handleChange = this.handleChange.bind(this)
        }
    
        searchstudent =_ => {
  
            fetch(`https://thenodejsf.herokuapp.com/servr/enrollment/search?namee=${this.state.studentname}`)
                  .then(response => response.json())
                  .then(response => this.setState({studentlist: response.data }))
                  .catch(err =>console.error(err))
                       
          }
          App() {
            // const thes ={props.students}
             const jokeComponents =this.state.studentlist.map(joke => <this.Joke key={joke.PRKEY}
                id={joke.PRKEY} 
                sid= {joke.SID} 
                 deptcode= {joke.DEPTCODE} 
                 coursenum= {joke.COURSENUM}
                 />)
             

             
                   return (
                    <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SID</th>
                        <th>Deptcode</th>
                        <th>coursenum</th>
                    </tr>
                </thead>
                <tbody>
                    {jokeComponents}
                </tbody>  
                </ReactBootStrap.Table>              
                
             )
         }
         
         Joke(props) {
            return (
            
                <tr key={props.id}>
                    <td>{props.sid}</td>
                    <td>{props.deptcode}</td>
                    <td>{props.coursenum}</td>
                    
                </tr>
                 
             )
         }

          thefre()
          {
            window.location = window.location;
          }

          handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            })
          }
         
          Adddem() {
           
              return (
              <div >
                <h1> add student name </h1>
              
              <input 
              type="text"
              name="studentname"
              onChange= {this.handleChange}
              />
              
             <button onClick={() => {
                 this.searchstudent();
               
            
              }}>search student</button>
                  
                </div>   
                    
            )
          }

  render() {
      return(
        <div>
      <div className="thetables"> 
      <div className="theleft"> 
      <h1>enrollment list</h1>
       <Enrolllist />
       </div>
      <div className="theleft"> 
      <h1>Student list</h1>
       <Studentlist />
        </div>
        </div>
        {this.Adddem()}
        {this.App()}
      </div>
      
      )
  }
    
}




export default Enrollsearch
