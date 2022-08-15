
import React from "react";
import High from "./high"
import Low from "./low"
import Close from './close'

import "./ticket.css"

class  Comp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            comp:this.props.data,
            summary:""
        }
    }

    gethigh=()=>{
        const result= this.state.comp.filter((item)=>item.priority>=3&&item.status===true)
        return result
     }

     getlow=()=>{
        const result= this.state.comp.filter((item)=>item.priority<3)
        return result
     }

     getclose=()=>{
        const result= this.state.comp.filter((item)=>item.status===false)
        return result
     }

     donetask=(itemid)=>{
        const temp=[...this.state.comp]
        const obj=temp.find((item)=>item.id===itemid)
        obj.status=!obj.status
        this.setState({comp:temp})
     }

  
    handleChange=(e,key)=>{
        if(key==='summ')
        this.setState({summary:e.target.value})
        console.log(this.state.summary)
    }

    des=(e)=>{
        e.preventDefault()
        const obj={
            summary:this.state.summary
        }
        let newData=[...this.state.comp,obj]
        this.setState({comp:newData}) 
    }  

     render(){
        console.log(this.state.comp.id)
        return(
            <div>
                <High hightask={this.gethigh()} donetask={this.donetask}></High>
                <Low lowtask={this.getlow()} donetask={this.donetask}></Low>
                {<Close donetask={this.getclose()}></Close>}
            </div>
        )
     }
}


export default  Comp