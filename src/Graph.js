import React from 'react'
 import {Chart} from 'react-google-charts'

const Graph=(props)=>{
    let high=0,low=0,medium=0
return(
    <div>
        {console.log(props.attribute)}
       { props.attribute.forEach(element => {
            if(element.priority==='high')
            {high++}   
            else if(element.priority==='medium'){
                medium++
            }
        else {
            low++
        }      
       })}
        
       
       
       {console.log(`h${high}l${low}m${medium}`)}
      
       <Chart  chartType="PieChart" data={[["priority","count"],["high",high],["low",low],["medium",medium]]}/>
          </div>
)
}
export default Graph        