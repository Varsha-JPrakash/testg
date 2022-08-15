import React from "react";

class High extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       
        const {hightask,donetask}=this.props
        return(
            <div>
            <div className="container">
                <div className="row-sm-3">
                <div className="col-sm-3">
                    <h2>Opened tickets</h2>
           
            {
                
                hightask.map((item)=>(
                    <div className="card">
                        <div className="card-body">
                        <h5>{item.timestamp}</h5>
                        <p>{item.priority}</p>
                        <p>{item. ticketdesc}</p>
                        <p>{item. ticketstatus}</p>
                        <p>{item.summary}</p>
                        {/* {/* <button className='btn1' onClick={()=>changeCompletion(item.id)}>mark completed</button> */}
                        <button className='btn1'onClick={()=>donetask(item.id)}>close</button> 
                    </div>
                    </div>
                ))
               
            }
            </div>
            </div>
            </div>
        </div>
        )
    }
}

export default High