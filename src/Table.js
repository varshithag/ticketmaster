import React from 'react'
import Trow from './Trow'


const Table=(props)=>{
    // const X=()=>{
    //     con
    // }
    return(
        <table class="table">
            <thead>
                <tr>
                <th>TicketCode</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Priority</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>delete</th>
                   

                </tr>
            </thead>
            <tbody>
                {props.tickets.map(ticket=>{
                    
                return<Trow key={ticket.ticket_code} scope="row" ticket={ticket} btnfun={props.btndelete} handleStatus={props.handleStatus}/>
                })}
            </tbody>
        </table>
    )

}
export default Table