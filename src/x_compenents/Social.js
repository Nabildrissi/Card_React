import React from 'react';
import SocialItems from './SocialItems';

function Social() {
  return (
    <div className='coantainer'>
    <h3 className='text text-center'>Social</h3>
  
     <ul className='list-group'>
     <SocialItems
        media='Facebook' 
        id='facebook' 
        img='https://picsum.photos/60' />
     <SocialItems 
        media='Instagram' 
        id='instagram' 
        img='https://picsum.photos/61' />
     <SocialItems 
        media ='Twitter' 
        id ='twitter' 
        img ='https://picsum.photos/62' />
       <SocialItems 
        media ='Linkdin' 
        id ='linkdin' 
        img ='https://picsum.photos/63' />
      
      </ul>
   </div>
  );
}

export default Social;
