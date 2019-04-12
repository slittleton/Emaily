// SurveyField contains logic to render a single label and text input

import React from 'react'

export default ({ input,label, meta: { error, touched } }) => {
  // console.log(meta); 
  // meta is aredux form object that shows info about form fields
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div className="red-text" style={{marginBottom: '5px'}}>
        {touched && error}
      </div>
    </div>
  )
}
