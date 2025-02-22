import React, { useContext } from 'react'
import { FirstName } from './A'

function D(props) {

    const name = useContext(FirstName)
  return (
    <div>
        {name}
    </div>
  )
}

export default D