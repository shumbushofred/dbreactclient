import React from "react"

import Courselist from './Courselist.js';
import './compstyle.css';
import * as ReactBootStrap from "react-bootstrap";
class Coursesearch extends React.Component {
    constructor(props) {
        super(props)
      this.state = {
        studentlist:[],
        deptcodee:"",
       
         }
    
         this.searchid = this.searchid.bind(this)
         this.thefre = this.thefre.bind(this)
         this.handleChange = this.handleChange.bind(this)
        }
    
        searchid =_ => {
  
            fetch(`https://thenodejsf.herokuapp.com/servr/course/search?DPTC=${this.state.deptcodee}`)
                  .then(response => response.json())
                  .then(response => this.setState({studentlist: response.data }))
                  .catch(err =>console.error(err))
                       
          }
          App() {
            // const thes ={props.students}
             const jokeComponents =this.state.studentlist.map(joke => <this.Joke key={joke.THEKEY} 
                id ={joke.THEKEY}
                deptcode= {joke.DEPTCODE} 
                coursenum= {joke.COURSENUM}
                title= {joke.TITLE}
                credithours= {joke.CREDITHOURS}
                 />)
             

             
                   return (
                    <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>deptcode</th>
                        <th>coursenum</th>
                        <th>title</th>
                        <th>credithours</th>
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
                    <td>{props.deptcode}</td>
                    <td>{props.coursenum}</td>
                    <td>{props.title}</td>
                    <td>{props.credithours}</td>
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
                <h1> Please add Dept code to show list with the same Dept code</h1>
              
              <input 
              type="text"
              name="deptcodee"
              onChange= {this.handleChange}
              />
              
             <button onClick={() => {
                 this.searchid();
                this.App();
            
              }}>search deptcode</button>
                  
                </div>   
                    
            )
          }

  render() {
      return(
        <div>
      <div className="thetables"> 
      
      <div className="theleft"> 
      <h1>Course list</h1>
       <Courselist />
        </div>
        </div>
        {this.Adddem()}
        {this.App()}
      </div>
      
      )
  }
    
}




export default Coursesearch
