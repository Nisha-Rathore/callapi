import React from 'react'

export const Btn = ({btnType,btnText}) => {
 
   
    if (btnType==="success"){
         return (<button className='btn success bg-green-600 rounded-[50%] p-20 text-white'>{btnText}</button>)
    }
    else if(btnType==="danger"){
         return (<button className='btn bg-red-600 rounded-[50%] p-20 text-white'>{btnText}</button>)
    } 
    else{
        return(<button className='btn bg-blue-500 rounded-[50%] p-20 text-white'>{btnText}</button>)
    }
     
  
};
