import React, { Component } from "react";
import File from './File'

class App extends Component{
   
    render(){
        return (
            <div className="container ">
                <File name='nabil'/>
                <File name='hatiti'/>
                <File name='imad'/>
            </div>
        )
    }
       
    
}
export default App;