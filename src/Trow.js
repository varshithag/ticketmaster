import React from 'react'
import Status from './Status'
class Trow extends React.Component{
    render(){
        
        return(
            <tr>
                 <td>{this.props.ticket.ticket_code}</td>
                <td>{this.props.ticket.name}</td>
                <td>{this.props.ticket.department}</td>
                <td>{this.props.ticket.priority}</td>
                <td>{this.props.ticket.message}</td>
                <td>{this.props.ticket.status}<Status ticket={this.props.ticket}/></td>
                <td><button onClick={()=>{this.props.btnfun(this.props.ticket.ticket_code)}}>Delete</button></td>
               
            </tr>
        )
        }
}
export default Trow
