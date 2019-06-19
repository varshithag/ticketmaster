import React from 'react'
import axios from 'axios'
import Table from './Table'
import Form from './Form'
import Search from './search'
import Graphs from './Graph'
import ProgressComponent from './Progress'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      tickets:[],
      originalTickets:[]
    }
    this.handleResponse=this.handleResponse.bind(this)
    this.handleSearch=this.handleSearch.bind(this)
    this.handlePriority=this.handlePriority.bind(this)
    this.handleDelet=this.handleDelet.bind(this)
  }
  componentDidMount(){
    axios.get('http://dct-api-data.herokuapp.com/tickets/?api_key=f996a87d0374fec1')
    .then(response=>{
      console.log(response.data)
      this.setState(()=>({
        tickets:response.data,
      originalTickets:response.data }))
   } ) }
   
   handleResponse(ticket){
    this.setState((prevState)=>({
      tickets:prevState.tickets.concat(ticket)
    }))

   }
   handleSearch(value){
    this.setState((prevState)=>({
      tickets:prevState.originalTickets.filter(ticket=>ticket.ticket_code.includes(value))}))

   }
   handlePriority(value){
     if(value==='all'){
      this.setState((prevState)=>({
        tickets:[].concat(prevState.originalTickets)
      }))
     }
     else{
      this.setState((prevState)=>({
        tickets:prevState.originalTickets.filter(ticket=>ticket.priority===value)}))
     }
     
   

   }
   handleDelet(value){
   axios.delete(`http://cors-anywhere.herokuapp.com/dct-api-data.herokuapp.com/tickets/${value}?api_key=f996a87d0374fec1`)
    .then(response=>{
      console.log(response.data)
      
    })
  .catch(error => {
    console.log(error.response)
    })}
     
  
   
     render(){
       console.log(this.state.tickets)
       return(
         <div>
           <div className="container">
           <h1>Ticket Master</h1>
           <h2>Listing ticket-{this.state.tickets.length}</h2>
           <Search handleSearch={this.handleSearch} handlePriority={this.handlePriority}/>
           
             <div className="row">
               <div className="col-md-8">
           <Table tickets={this.state.tickets} btndelete={this.handleDelet}/>
           </div>
           <div className="col-md-4">
           <Form handleResponse={this.handleResponse}/>
           </div>
           </div>
           </div>
           <ProgressComponent/>
           <Graphs attribute={this.state.tickets}/>
         </div>
       
       )
     }
}
export default App

// import {Chart} from 'react-google-charts'