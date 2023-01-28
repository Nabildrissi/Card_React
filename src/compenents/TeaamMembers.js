import React, { Component } from "react";

class TeamMembers extends Component{
    render(){
        
    return(
        <div className="col-md-4 col-sm-6 border">
            <div className="card">
                <div className="card-header">
                    <img src={this.props.info.img} alt={this.props.info.name}/>
                </div>
              
                <div className="card-body" >
                   
                    <h2>{this.props.info.name}</h2>
                    <h2>{this.props.info.position}</h2>
                    <h2>{this.props.info.phone}</h2>
                    <h2>{this.props.info.email}</h2>
                    <h2>{this.props.info.website}</h2>
                </div>
            </div>

                
        </div>
     
    )
}
}
export default TeamMembers;