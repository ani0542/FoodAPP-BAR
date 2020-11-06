import React from 'react'

function Header(props) {
  return (
    <>
        <div className='jumbotron'>
                    
                 <h1 className='display-1'>
                      <span className="material-icons brand-icon">
                          local_pizza
                      </span>
                   Food Recipe</h1>
                   <div class="input-group w-50 mx-auto">
                          <input type="text" class="form-control" placeholder='Search Recipes...' value={props.search} onChange={props.onInputChange}/>
                          <div class="input-group-append">
                            <button class="btn btn-dark"  onClick={props.onSearchClick}>Search Recipe</button>
                          </div>
                        </div>
                  </div>
    </>
  )
}

export default Header
