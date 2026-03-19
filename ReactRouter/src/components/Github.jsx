import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Github() {
    const [data,setData]=useState({})
    // const {userName}=useParams()
    const [userNameValue,setUserNameValue]= useState("Deepanshustark")
  //   useEffect(()=>{
  //           // fetch(`https://api.github.com/users/${userName}`)
  //           // .then(response=>response.json())
  //           // .then(data=>{
                
  //           //     setData(data)
  //           //     console.log(data)
  //           // })
  //           githubApi()
  //   },[])
  // }
  useEffect(()=>{
    githubApi()
  },[])

    async function githubApi(){
        const response=await  fetch(`https://api.github.com/users/${userNameValue}`)
        const data=await response.json()
        setData(data)
        console.log(data)
    }
    

  return (
    
    <>
      
         <div className="flex items-center justify-center gap-3 mt-10">
  <input
    type="text"
    placeholder="Search GitHub username..."
    value={userNameValue}
    onChange={(e) => setUserNameValue(e.target.value)}
    className="px-4 py-2 w-72 border border-gray-300 rounded-xl shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
  />

  <button
    onClick={githubApi}
    className="px-5 py-2 bg-black text-white rounded-xl 
               hover:bg-gray-800 transition duration-200"
  >
    Fetch
  </button>
</div>
        
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-gray-200 rounded-xl shadow-md mx-auto">

      {/* Image */}
      <a href={data.html_url} target="_blank">
        <img
          className="rounded-xl w-full"
          src={data.avatar_url}
          alt="profile"
        />
      </a>

      {/* Name */}
      <a href={data.html_url} target="_blank">
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-gray-800">
          {data.name || data.login}
        </h5>
      </a>

      {/* Bio */}
      <p className="mb-6 text-gray-600">
        {data.bio || "No bio available"}
      </p>

      {/* Followers & Following */}
      <div className="flex justify-between mb-6 text-gray-700">
        <p>
          <span className="font-bold">{data.followers}</span> Followers
        </p>
        <p>
          <span className="font-bold">{data.following}</span> Following
        </p>
      </div>

      {/* Button */}
      <a
        href={data.html_url}
        target="_blank"
        className="inline-flex items-center text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-sm"
      >
        View Profile
        <svg
          className="w-4 h-4 ms-1.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </a>
    </div>
            

 
    </>
    
    
  )
}

export default Github
