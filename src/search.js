import React from 'react'

class Search extends React.Component{
    constructor(){
        super()
        this.state={
            search:''
        
    }
    this.handleSearchChange=this.handleSearchChange.bind(this)
    }
    handleSearchChange(e){
        const search=e.target.value
        console.log(search)
         this.setState(()=>({search}))
         this.props.handleSearch(search)
    }
    render(){
        return(
                <div>
                    <label>
                        <input type="text" value={this.state.search} onChange={this.handleSearchChange} placeholder="search"/>
                    </label>
                    <button  onClick={
                        ()=>{this.props.handlePriority('all')}
                    }>All</button>
                    <button onClick={
                        ()=>{this.props.handlePriority('high')}
                    }>High</button>
                    <button  onClick={
                        ()=>{this.props.handlePriority('medium')}
                    }>Medium</button>
                    <button  onClick={
                        ()=>{this.props.handlePriority('low')}
                    }>Low</button>
                    
                </div>
        )
    
            
        
    }
}
export default Search