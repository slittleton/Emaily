// Shows users their for inputs for review
import React from 'react';

const SurveyReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button
        className="yellow darken-3 btn-flat"
        onClick={onCancel}
      >Cancel</button>
    </div>
  )

}

export default SurveyReview;