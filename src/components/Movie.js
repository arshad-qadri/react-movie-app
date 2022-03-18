import axios from 'axios'
import React, { useEffect } from 'react'

const Movie = () => {

useEffect(()=>{
 axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=69a7e501")
      .then((res) => {
        console.log("res", res);
       
      })
      .catch((err) => {
        console.log("err", err);
      });

},[])
  return (
    <>
    <h1>hello</h1>
      </>
  )
}

export default Movie