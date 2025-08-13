
import { useEffect, useState } from 'react';

import './App.css';
import { MdDelete } from 'react-icons/md';
import { PiEyes } from 'react-icons/pi';
import { IoAdd } from 'react-icons/io5';
import { Btn } from './component/Btn';

function App() {
  const [data,setData] = useState([]);
  const [count ,setCount] = useState(0);


   const call = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const resData = await res.json();
    console.log(resData);
    setData(resData);
    
   };

   useEffect(() =>{
    call();
   },[]);
  
  return (
   <> 
   {data.length > 0 && data.map((item,i)=>(
    <div key={i}>
    <div style={{color:"#5F81E4"}} className='font-semibold text-5xl '>Data of user {item.id}</div>
     <div style={{border:"1px solid yellow",margin:"5px", padding:"25px"}} className='bg-gradient-to-r from-[#f6f6d9] via-[#47e4e0] to-[#5f81e4]'>
       <div style={{display:'flex', alignItems:'center' ,justifyContent:'space-between'}}>
         <div className='text-2xl text-green-700'>User id = {item.id}</div>
         <div>
          <Btn btnType='success'  btnText = {<PiEyes  ></PiEyes>}/>
          <Btn btnType='danger' btnText = {<MdDelete></MdDelete>}/>
          <Btn btnType='default' btnText = {<IoAdd></IoAdd>}/>
          
         </div>
       </div>
    
    <div className='text-xl text-green-700'>User name = {item.name}</div>
    <div className='text-xl text-green-700'>User username = {item.username}</div>
    <div className='text-xl text-green-700'>User email = {item.email}</div>
    <div className='text-xl text-green-700'>User website = {item.website}</div>
    </div>
    </div>
   ))}
    
   </>
  );
}

export default App;
