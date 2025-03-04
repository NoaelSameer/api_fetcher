"use client";

import React, { useState } from 'react';

function RandomFood() {
  const [meals, setMeals] = useState([]);
  // Loading is used to indicate that the response is going through and the server is waiting for a reply back
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try{
      // I am fetching this data through the client server because I have no idea how many requests they will need, meaning that this reduces any unneccasry requests
      // Since it also isn't that big of a load on the system, it works perfectly for what I am trying to achieve. 
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      const newMeal = data.meals[0];

      setMeals(prevMeals => [...prevMeals, newMeal]);
    } 
    catch (error){
      console.error(error);
    } 
    finally{
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 className='text-center text-[6vw]'>Random Meal List</h1>
      
      <button 
        onClick={fetchData} 
        // if loading is false, the button works, but if its true then the button doesn't work
        disabled={loading}
        className="flex m-auto border-2 mb-2 p-1">
          {loading ? 'Loading...' : 'Add Random Meal'}
      </button>

      {meals.length === 0 ? (
        <p className='text-center'>No meals added yet</p>
      ) : (
        <div className="flex flex-col gap-[2vh]">
          {meals.map((meal, index) => (
            <div 
              key={index}
              className="border border-solid border-white rounded-sm px-[2vw]"
            >
              <h2>{meal.strMeal}</h2>
              <p><strong>Category:</strong> {meal.strCategory}</p>
              <p><strong>Origin:</strong> {meal.strArea}</p>
              {/* Details literally makes an accordian, its so nice */}
              <details>
                <summary>Instructions</summary>
                <p>{meal.strInstructions}</p>
              </details>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RandomFood;