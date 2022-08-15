import React from "react";


class Low extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {lowtask,donetask}=this.props
        return(
            <div>
            <div className="container">
                <div className="row-sm-3">
                 
                    {/* <h1>low</h1> */}
           
            {
                
                lowtask.map((item)=>(
                    <div className="card">
                        <div className="card-body">
                        <h5>{item.timestamp}</h5>
                        <p>{item.priority}</p>
                        <p>{item. ticketdesc}</p>
                        <p>{item.ticketstatus }</p>
                        <p>{item.summary}</p>
                        <button className='btn1'onClick={()=>donetask(item.id)}>close</button> 
                        {/* <button className='btn1' onClick={()=>changeCompletion(item.id)}>mark completed</button>
                        <button className='btn1'onClick={()=>deleteTask(item.id)}>move to trash</button> */}
                    </div>
                    </div>
                ))
               
            }
            </div>
            </div>
        </div>
        )
    }
}

export default Low