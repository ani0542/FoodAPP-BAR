import React from 'react'

function RecipeItem(props) {
    return (
        <>
             <div className='col-md-3'>
                          <div className='card py-2 text-center'>
                               <img src={props.image} className='img-fluid w-50 mx-auto rounded-circle'/>
                                  <div className='card-body'>
                                      <h5>{props.label}</h5>

                                  </div>

                                  <ul className='list-group list-group-flush'>
                                        {
                                          props.ingredient.map((ingredient)=>(
                                               <li className='list-group-item'>{ingredient}</li>
                                          ))

                                        }
                                  </ul>
                          </div>
                      </div>
        </>
    )
}

export default RecipeItem
