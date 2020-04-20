import React from "react"
import * as ReactBootStrap from "react-bootstrap";
class Studentlist extends React.Component {
    constructor(props) {
        super(props)
      this.state = {
         students: []
         
         }
    
         this.getStudent = this.getStudent.bind(this)
         this.App = this.App.bind(this)
       
         this.Joke = this.Joke.bind(this)
        }
        componentWillMount() {
            this.getStudent();
          }
          
          
        getStudent = _ => {
            fetch('https://thenodejsf.herokuapp.com/servr/product')
                  .then(response => response.json())
                  .then(response => this.setState({students: response.data }))
                  .catch(err => console.error(err))
          }
         
        
        App() {
            // const thes ={props.students}
             const jokeComponents =this.state.students.map(joke => <this.Joke key={joke.STUDENTID} id={joke.STUDENTID} student={joke.STUDENTNAME} major= {joke.MAJOR} />)
             

             
                   return (
                    <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>student ID</th>
                        <th>Studentname</th>
                        <th>themajor</th>
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
            
                <tr key={props.key}>
                    <td>{props.id}</td>
                    <td>{props.student}</td>
                    <td>{props.major}</td>
                </tr>
                 
             )
         }
  render() {
      return(
      <div>
          {this.App()}
          
          </div>
      )
  }
    
}




export default Studentlist
