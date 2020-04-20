import React from "react"
import * as ReactBootStrap from "react-bootstrap";
class Enrolllist extends React.Component {
    constructor(props) {
        super(props)
      this.state = {
         enroll: []
         
         }
    
         this.getroll = this.getroll.bind(this)
         this.App = this.App.bind(this)
         this.Joke = this.Joke.bind(this)
        }
        componentWillMount() {
            this.getroll();
          }
          
          
          getroll = _ => {
            fetch('https://thenodejsf.herokuapp.com/servr/enrollment')
                  .then(response => response.json())
                  .then(response => this.setState({enroll: response.data }))
                  .catch(err => console.error(err))
          }
          
        App() {
            // const thes ={props.students}
             const jokeComponents =this.state.enroll.map(joke => <this.Joke key={joke.PRKEY}
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
  render() {
      return(
      <div>
          {this.App()}
          
          </div>
      )
  }
    
}




export default Enrolllist
