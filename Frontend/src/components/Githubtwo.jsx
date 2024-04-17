import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

//this is only mat to understand to  shoe different method of usi api
function Githubtwo() {
     const data = useLoaderData()
    // const [data , setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/codefundamentals1')
    //     .then(response => response.json())
    //     .then(data => {console.log(data)
    //         setdata(data)
    //     })
     
    // }, [])
    
  return (
    <div>
github folowers : {data.followers}
<img src="data.avatar_url" alt="gitrhub prodefile" />
it is called by loader method which is optimised 

    </div>
  )
}

export default Githubtwo

export const githubInfoLoader = async ()=>{
    const response  = await fetch('https://api.github.com/users/codefundamentals1')
    return response.json()
}