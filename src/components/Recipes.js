import React from 'react'
import RecipeItem from './RecipeItem'

function Recipes(props) {
  return (
    <>
          <div className='row'>
                    {
                      props.recipe.map((value)=>{
                        return(
                                  <RecipeItem  label={value.recipe.label}
                                  
                                  image={value.recipe.image}

                                  ingredient={value.recipe.ingredientLines}
                                  
                                  />
                        )
                      })
                    }
          </div>
    </>
  )
}

export default Recipes
