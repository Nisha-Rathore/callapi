
import { useEffect, useState } from 'react';
import './App.css';

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
    <div>
    <h1 style={{color:"skyblue"}}>Data of user {item.id}</h1>
    <div style={{border:"1px solid yellow",backgroundColor:"pink",justifyItems:"center",margin:"15px 13px"}}>
    <h3>User id = {item.id}<button type='button' style={{backgroundColor:"orange", color:'white', margin:" 8px 8px"}} >
      Add</button><button type='button' style={{backgroundColor:"skyblue", color:'white' , margin:" 8px 8px"}} >
      View</button><button type='button' style={{backgroundColor:"red", color:'white', margin:" 8px 8px"}} >
      Delete</button></h3>
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
