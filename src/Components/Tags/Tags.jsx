import React from 'react'

function Tags({tags}) {
  return (
    <>
    {
        tags.map((tag, index)=>(
            <li key={index}>{tag}</li>
        ))
    }
    </>
  )
}

export default Tags