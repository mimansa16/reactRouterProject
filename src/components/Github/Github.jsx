import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() =>{
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data)
    //     setData(data)
    //  })
    // },[]) --> adr loader parameter use nhi karte to aise karte!!
  return (
    <div className="text-center bg-gray-600 text-white p-4 m-4 text-3xl">Github Followers: {data.followers} 
    <img src={data.avatar_url} alt="GitUser" width={300}/>
    </div>
  )
}
export default Github


export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json() // this response is actually a promise
    // now this 'githubInfo' is passed to loader parameter in Route
}