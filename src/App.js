
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
    <h1 style={{color:"skyblue"}}>Data of user {item.id}</h1>
     <div style={{border:"1px solid yellow",backgroundColor:"pink",margin:"5px", padding:"25px"}}>
       <div style={{display:'flex', alignItems:'center' ,justifyContent:'space-between'}}>
         <h3>User id = {item.id}</h3>
         <div>
          <Btn btnType='success'  btnText = {<PiEyes  ></PiEyes>}/>
          <Btn btnType='danger' btnText = {<MdDelete></MdDelete>}/>
          <Btn btnType='default' btnText = {<IoAdd></IoAdd>}/>
          
         </div>
       </div>
    
    <h3>User name = {item.name}</h3>
    <h3>User username = {item.username}</h3>
    <h3>User email = {item.email}</h3>
    <h3>User website = {item.website}</h3>
    </div>
    </div>
   ))}
    
   </>
  );
}

export default App;
