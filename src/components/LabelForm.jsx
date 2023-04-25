import React from 'react'

const LabelForm = ({labelfor, labelText}) => {
  return (
    <label for={labelfor}>{labelText}</label>
  )
}

export default LabelForm