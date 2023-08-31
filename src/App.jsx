import React ,{useState,useEffect} from 'react'
const url = 'https://api.github.com/users';
import './App.css'





const App = () => {
  const [value,setValue]=useState([])
  useEffect(()=>{
    console.log("hello")
    const fetchData = async()=>{
      try{
        const data =await fetch(url);
        const response=await data.json();
        console.log(response)
        setValue(response)
      }catch(error){
console.log(error)
      }

      
    }
    fetchData();
    

  },[])
  

   
  return (
    <section>
    <h3>github users</h3>
    <ul className='users'>
      {value.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>profile</a>
            </div>
          </li>
        );
      })}
    </ul>
  </section>
  )
}

export default App
