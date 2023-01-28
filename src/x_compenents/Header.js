import React from 'react';


function Header() {
 //let title= "";
 
  const client = "designer";
  const title = {
    designer: "designer",
    programming: "programming"

  }
 /*
 if(client === "programmer"){
    title ="Programmer is my life "
  }else{
    title="coding is my life "
  }
  */

    return (
    <div className='navbar bg-dark rounded'>
       <h1 className='bg-dark text-white' > {client=== "designer" ? title.designer : title.programming} is my life </h1>
    
    </div>
  );
}

export default Header;
