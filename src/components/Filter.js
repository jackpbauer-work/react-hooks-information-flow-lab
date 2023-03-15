import React from 'react'

function Filter({ onCategoryChang }) {
  return (
    
    <select name="filter" onChange={onCategoryChang}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>

  )
}

export default Filter