import React ,{useEffect} from 'react'
const url = 'https://api.github.com/users';

const fetchdata = () => {
     // const [users,setUsers]=useState([])
     useEffect(()=>{
        const fetch=async()=>{
            const response =await fetch(url)
            const user =await response.json()
          console.log(user)
          console.log("this is use effect")

        }

    },[])
  return (
    
    <div>

    
      
    </div>
  )
}

export default fetchdata
