"use client";

import React, {useState} from 'react'


function RandomFood() {
    const [randomFood, setRandomFood] = useState()

    
  // Fetching data from the Poki API
  async function fetchData(){

    try{
        const response = await fetch('www.themealdb.com/api/json/v1/1/random.php')
        const data = await response
        setRandomFood(data)
    }
    catch(error){
        console.error('Error:', error)
    }
  }


  return (
    <>
    {/* <p>hi</p> */}
    
      <button onClick={fetchData}>Fetch Data</button>
      {randomFood && (
      <div>
        <h2>{randomFood.strMeal}</h2>

      </div>
      )}

      </>

  )
}

export default RandomFood