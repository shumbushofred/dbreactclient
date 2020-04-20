import React from "react"

import Enrolllist from './Enrolllist.js';
class Addenroll extends React.Component {
    constructor(props) {
        super(props)
      this.state = {
        sid:"",
        deptcode:"",
        coursenum:""
       
         }
    
         this.addenroll = this.addenroll.bind(this)
         this.thefre = this.thefre.bind(this)
         this.handleChange = this.handleChange.bind(this)
        }
    
        addenroll =_ => {
  
            fetch(`https://thenodejsf.herokuapp.com/servr/enrollment/add?SID=${this.state.sid}&DEPTCODE=${this.state.deptcode}&COURSENUM=${this.state.coursenum}`)
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
                <h1> welcome, add enrollment here</h1>
                <label>
              SID:
              <input 
              type="text"
              name="sid"
              onChange= {this.handleChange}
              />
              </label>
              <label>
              dept code:
              <input 
              type="text"
              name="deptcode"
              onChange= {this.handleChange}
              />
              </label>
              <label>
              course number:
              <input 
              type="text"
              name="coursenum"
              onChange= {this.handleChange}
              />
              </label>
             <button onClick={() => {
                 this.addenroll();
                this.thefre()
            
              }}>Add course</button>
                  
                </div>   
                    
            )
          }

  render() {
      return(
      <div>
          {this.Adddem()}
         <Enrolllist />
      </div>
      )
  }
    
}




export default Addenroll
