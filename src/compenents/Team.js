import React, { Component } from "react";
import TeamMembers from "./TeaamMembers";


class Team extends Component{
       constructor(){
              super();
              this.state={
                     memberinfo : [
                            {id: 1, img:'images/cc.jpg',name:'Nabil',     position:'ouujda',   phone:'+212626701190',   email:'drissinabil66@gmail.com',   website:'https://wwww.Technodrop.com'},
                            {id: 2, img:'/images/cc.jpg',name:'Hatiti',   position:'ouujda',   phone:'+212624751150',   email:'mohamedhatiti@gmail.com',   website:'https://wwww.Hatititi.com'},
                            {id: 3, img:'/images/cc.jpg',name:'amin',     position:'ouujda',   phone:'+212627483929',   email:'amingartit@gmail.com',      website:'https://wwww.amingrtttt.com'},
                            {id: 4, img:'/images/cc.jpg',name:'hamza',    position:'ouujda',   phone:'+21262424559',    email:'hamzaelmoussaid@gmail.com', website:'https://wwww.la9re3.com'},
                            {id: 5, img:'/images/cc.jpg',name:'choch',    position:'ouujda',   phone:'+21262424559',    email:'hafdhjd@gmail.com'},
                            {id: 6, img:'/images/cc.jpg',name:'donknow',  position:'ouujda',   phone:'+21232454659',    email:'hafdhjd@gmail.com'}, 
                    
                        ]
              }
       }

render(){
     /*const info= [
        {id: 1, img:'images/cc.jpg',name:'Nabil',     position:'ouujda',   phone:'+212626701190',   email:'drissinabil66@gmail.com',   website:'https://wwww.Technodrop.com'},
        {id: 2, img:'/images/cc.jpg',name:'Hatiti',   position:'ouujda',   phone:'+212624751150',   email:'mohamedhatiti@gmail.com',   website:'https://wwww.Hatititi.com'},
        {id: 3, img:'/images/cc.jpg',name:'amin',     position:'ouujda',   phone:'+212627483929',   email:'amingartit@gmail.com',      website:'https://wwww.amingrtttt.com'},
        {id: 4, img:'/images/cc.jpg',name:'hamza',    position:'ouujda',   phone:'+21262424559',    email:'hamzaelmoussaid@gmail.com', website:'https://wwww.la9re3.com'},
        {id: 5, img:'/images/cc.jpg',name:'choch',    position:'ouujda',   phone:'+21262424559',    email:'hafdhjd@gmail.com'},
        {id: 6, img:'/images/cc.jpg',name:'donknow',  position:'ouujda',   phone:'+21232454659',    email:'hafdhjd@gmail.com'}, 

    ]*/

    const members = this.state.memberinfo.map(member=><TeamMembers
                    key={member.id}
                    img= {member.img}
                    name={member.name}
                    position={member.position}
                    phone={member.phone}
                    email={member.email}
                    website={member.website}

                    />
                 );

   

    return (
            <div className="row">
                {members}
            </div>
            
       /* <div className="row">
            <TeamMembers
            info ={{
                   id: 1, 
                   img:'images/cc.jpg',
                   name:'Nabil',     
                   position:'ouujda',   
                   phone:'+212626701190',   
                   email:'drissinabil66@gmail.com',   
                   website:'https://wwww.Technodrop.com'
            }}
            />
            <TeamMembers
            info ={{
                   id: 1, 
                   img:'images/cc.jpg',
                   name:'Nabil',     
                   position:'ouujda',   
                   phone:'+212626701190',   
                   email:'drissinabil66@gmail.com',   
                   website:'https://wwww.Technodrop.com'
            }}
            />
            <TeamMembers
            info ={{
                   id: 1, 
                   img:'images/cc.jpg',
                   name:'Nabil',     
                   position:'ouujda',   
                   phone:'+212626701190',   
                   email:'drissinabil66@gmail.com',   
                   website:'https://wwww.Technodrop.com'
            }}
            />
            <TeamMembers
            info ={{
                   id: 1, 
                   img:'images/cc.jpg',
                   name:'Nabil',     
                   position:'ouujda',   
                   phone:'+212626701190',   
                   email:'drissinabil66@gmail.com',   
                   website:'https://wwww.Technodrop.com'
            }}
            />
            <TeamMembers
            info ={{
                   id: 1, 
                   img:'images/cc.jpg',
                   name:'Nabil',     
                   position:'ouujda',   
                   phone:'+212626701190',   
                   email:'drissinabil66@gmail.com',   
                   website:'https://wwww.Technodrop.com'
            }}
            />
            <TeamMembers
            info ={{
                   id: 1, 
                   img:'images/cc.jpg',
                   name:'Nabil',     
                   position:'ouujda',   
                   phone:'+212626701190',   
                   email:'drissinabil66@gmail.com',   
                   website:'https://wwww.Technodrop.com'
            }}
            />
        </div>
        */
    )}
}
export default Team; 