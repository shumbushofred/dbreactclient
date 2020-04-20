import React from "react"

import Studentlist from './Studentlist.js';
class Addstudent extends React.Component {
    constructor(props) {
        super(props)
      this.state = {
        sname:"",
        smajor:"",
        theclick: false
         
         }
    
         this.addproduct = this.addproduct.bind(this)
         this.thefre = this.thefre.bind(this)
         this.handleChange = this.handleChange.bind(this)
        }
    
          addproduct =_ => {
  
            fetch(`https://thenodejsf.herokuapp.com/servr/product/add?nam=${this.state.sname}&major=${this.state.smajor}`)
                  .then(response => response.json())
                  .catch(err =>console.error(err))
                       
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
                <h1> welcome, add student here</h1>
                <label>
              student name:
              <input 
              type="text"
              name="sname"
              onChange= {this.handleChange}
              />
              </label>
              <label>
              major:
              <input 
              type="text"
              name="smajor"
              onChange= {this.handleChange}
              />
              </label>
             <button onClick={() => {
                 this.addproduct();
                this.thefre()
            
              }}>Add product</button>
                  
                </div>   
                    
            )
          }

  render() {
      return(
      <div>
          {this.Adddem()}
         <Studentlist />
      </div>
      )
  }
    
}




export default Addstudent
