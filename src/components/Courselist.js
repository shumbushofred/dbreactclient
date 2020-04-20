import React from "react"
import * as ReactBootStrap from "react-bootstrap";
class Courselist extends React.Component {
    constructor(props) {
        super(props)
      this.state = {
         courses: []
         
         }
    
         this.getcourse = this.getcourse.bind(this)
         this.App = this.App.bind(this)
         this.Joke = this.Joke.bind(this)
        }
        componentWillMount() {
            this.getcourse();
          }
          
          
          getcourse = _ => {
            fetch('https://thenodejsf.herokuapp.com/servr/course')
                  .then(response => response.json())
                  .then(response => this.setState({courses: response.data }))
                  .catch(err => console.error(err))
          }
          
        App() {
            // const thes ={props.students}
             const jokeComponents =this.state.courses.map(joke => <this.Joke key={joke.THEKEY} 
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
  render() {
      return(
      <div>
          {this.App()}
          
          </div>
      )
  }
    
}




export default Courselist
