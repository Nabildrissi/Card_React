import React from 'react';


function Text() {
const client ="frontend";
const title={
    frontend: "Front End Developer ",
    backend : "Back End Developer",
    

}


  return (
    <div>
       <p>hello every one how are you  , i wish you are good in this pretty life 
        , I want to <span style={{color:"red"}}>became Devloper {client === "frontend" ? title.frontend : title.backend}</span> 
           sow know I'm learning how to
        Create my first Site web with React and I wish you to help with same comment and tell 
        me how you can saw this page if its good or not and thank you !!.  
         </p>
    </div>
  );
}

export default Text;