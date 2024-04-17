import React, { useEffect, useState } from 'react'

function Github() {
    const [data , setdata] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/codefundamentals1')
        .then(response => response.json())
        .then(data => {console.log(data)
            setdata(data)
        })
     
    }, [])
    
  return (
    <div>
github folowers : {data.followers}
<img src="data.avatar_url" alt="gitrhub prodefile" />
    </div>
  )
}

export default Github