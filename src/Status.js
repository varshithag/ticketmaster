import React from 'react'
import axios from 'axios'
class Status extends React.Component{
    constructor(){
        super()
        this.state={
            status:false
        }
        this.handleClick=this.handleClick.bind(this)
    }
    componentDidMount(){
        if(this.props.ticket.status==="close"){
            this.setState({status:true})
        }
        
    }
    handleClick(){
        if(this.props.ticket.status==="open"){
            this.props.ticket.status="close"
        }
        else{
            this.props.ticket.status="open"
        }
        axios.put(`http://dct-api-data.herokuapp.com/tickets/${this.props.ticket.ticket_code}?api_key=f996a87d0374fec1`,this.props.ticket)
        .then(response=>{
            console.log(response.data)
        })
        console.log(this.props.ticket.status)
    }
    render(){
        return(
            <input type="checkbox" onClick={this.handleClick} checked={this.state.status}/>
        )
    }
    
}
export default Status