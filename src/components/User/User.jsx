import React from "react"
import { useParams } from "react-router-dom"

const User = () => {
    const {userId} = useParams() // by this we can capture and use and display url parameters
  return (
    <div className="bg-gray-600 text-white p-4 text-3xl">User: {userId}</div>
  )
}
export default User