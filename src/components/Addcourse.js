import React from "react"

import Courselist from './Courselist.js';
class Addcourse extends React.Component {
    constructor(props) {
        super(props)
      this.state = {
        deptcode:"",
        coursenum:"",
        title:"",
        credithours:""
         }
    
         this.addcourse = this.addcourse.bind(this)
         this.thefre = this.thefre.bind(this)
         this.handleChange = this.handleChange.bind(this)
        }
    
        addcourse =_ => {
  
            fetch(`https://thenodejsf.herokuapp.com/servr/course/add?DEPTCODE=${this.state.deptcode}&COURSENUM=${this.state.coursenum}&TITLE=${this.state.title}&CREDITHOURS=${this.state.credithours}`)
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
                <h1> welcome,add course here</h1>
              <label>
              dept:  
              <input 
              type="text"
              name="deptcode"
              onChange= {this.handleChange}
              />
              </label>
              <label>
              coursenum:  
              <input 
              type="text"
              name="coursenum"
              onChange= {this.handleChange}
              />
              </label>
              <label>
              title: 
              <input 
              type="text"
              name="title"
              onChange= {this.handleChange}
              />
               </label>
               <label>
              credit hours: 
              <input 
              type="text"
              name="credithours"
              onChange= {this.handleChange}
              />
              </label>
             <button onClick={() => {
                 this.addcourse();
                this.thefre()
            
              }}>Add course</button>
                  
                </div>   
                    
            )
          }

  render() {
      return(
      <div>
          {this.Adddem()}
         <Courselist />
      </div>
      )
  }
    
}




export default Addcourse
