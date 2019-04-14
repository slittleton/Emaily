// SurveyNew show SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = {
    formReview: false
  }
  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
}

  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm',
  destroyonUnmount: true // if someone navigates away from SurveyNew clear form values
  // remember that in the child components of SurveyNew we told redux-form to keep
  // the form values around. 
})(SurveyNew);