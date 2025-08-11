
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState([]);


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
   <> About 
   {data.length > 0 && data.map((item,i)=>(
    <div>{item.name}</div>
   ))}
    
   </>
  );
}

export default App;
