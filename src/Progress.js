import React from 'react'
import axios from 'axios'
class ProgressComponent extends React.Component{
    constructor(){
        super()
        this.state={
            now:0,
            tickets:[]
        }
    }
    componentDidMount(){
        axios.get('http://dct-api-data.herokuapp.com/tickets/?api_key=f996a87d0374fec1')
        .then(response=>{

            this.setState({tickets:response.data})
        }       )
    }
      render(){
        let count=0
        return(
            <div>{this.state.tickets.forEach((ticket)=>{
                         if(ticket.status==="close"){
                             count+=1
                         }
                     })}
              <progress value={String(count)} max={this.state.tickets.length} >
              </progress>
            </div> 

        )
    }
}
export default ProgressComponent
