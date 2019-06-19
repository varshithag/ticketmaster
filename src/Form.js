import React from 'react'
import axios from 'axios'
class Form extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            department:'',
            priority:'',
            message:'',
            departmentOption:[
                {id:1,name:'Technical'},
                {id:2,name:'Hr'},
                {id:3,name:'Sales'}
            ],
            errors:''
        }
        this.handleTextChange=this.handleTextChange.bind(this)
        this.handlePriorityChange=this.handlePriorityChange.bind(this)
        this.handleMessageChange=this.handleMessageChange.bind(this)
        this.handleDepartmentChange=this.handleDepartmentChange.bind(this)
        this.handleSubmition=this.handleSubmition.bind(this)
    }
    handleTextChange(e){
        const name=e.target.value
        this.setState(()=>({name}))
    }
    handleDepartmentChange(e){
        const department=e.target.value
        this.setState(()=>({department}))
    }
    handlePriorityChange(e){
        const priority=e.target.value
        this.setState(()=>({priority}))
    }
    handleMessageChange(e){
        const message=e.target.value
        this.setState(()=>({message}))
    }
    handleSubmition(e){
        e.preventDefault()
        const formData={
            name:this.state.name,
            department:this.state.department,
            priority:this.state.priority,
            message:this.state.message

        }
        console.log(formData)
        axios.post('http://dct-api-data.herokuapp.com/tickets/?api_key=f996a87d0374fec1',formData)
        .then(response=>{
            if(response.data.hasOwnProperty('errors')){
                console.log(response.data.errors)
                this.setState(()=>({errors:response.data.errors}))
            }
            else{
            this.props.handleResponse(response.data)
            this.setState(()=>({
            name:'',
            department:'',
            priority:'',
            message:'' }))
            }
        })

    }
    render(){
        return(
            
                <fieldset>
                    <h3>Add Tickets</h3>
                    <div className="form-group">
                    <form onSubmit={this.handleSubmition}>
                        <div className="form-control">
                            <label>
                            Name:
                            <input type='text' value={this.state.name} className="form-control" onChange={this.handleTextChange}/>
                            {this.state.errors.name &&<span>{this.state.errors.name.join(',')}</span>}
                            </label>
                        </div>
                             <br/>
                        <div className="form-control">
                            <label>
                            Department
                                <select className="form-control"  onChange={this.handleDepartmentChange}>
                                    {this.state.departmentOption.map((dept)=>{
                                    return<option key={dept.id}>{dept.name}</option>
                            })}
                                </select>
                         {this.state.errors.department&&<span>{this.state.errors.department.join(',')}</span>}

                          </label>
                          </div>
                        <br/>
                        <div className="form-control">
                        <label>
                            Priority
                           <select onChange={this.handlePriorityChange} className="form-control">
                               <option value="">Select</option>
                               <option value="high">High</option>
                               <option value="medium">Medium</option>
                               <option value="low">Low</option>
                           </select>
                        {this.state.errors.priority&&<span>{this.state.errors.priority.join(',')}</span>}
                        </label>
                        <br/> </div>
                        <div className="form-control">
                        <label>
                            Message:
                            <textarea value={this.state.message} className="form-control"  onChange={this.handleMessageChange}>
                            </textarea>
                            {this.state.errors.message&&<span>{this.state.errors.message.join(',')}</span>}
                        </label>
                        <br/>
                        </div>
                        <label>
                              <div className="btn-primary">
                                   <input type='submit' className="btn btn-primary" />
                              </div>
                        </label>
                        <label>
                              <input type='reset' className="btn btn-primary"/>
                        </label>
                    </form>
                    </div>
                </fieldset>
            
        )
    }
}
export default Form