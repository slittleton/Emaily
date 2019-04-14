//SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import _ from 'lodash';
import formFields from './formFields';

class SurveyForm extends Component {

renderFields () {
  return _.map(formFields, ({ label, name })=>{
    return (
    <Field
      key={name}
      component={SurveyField} 
      type="text" 
      label={label} 
      name={name}
    />
    );
  })
}

render() {
  return (
    <div>
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {this.renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
}
}

function validate (values) { // values are coming from redux-form values
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    // using lodash library _.each to iterate through FIELDS object for
    // form validation
    if(!values[name]) {
      errors[name] = 'You must provide a value'
    }
  });

  

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm', //goes into redux state and is used in SurveyFormReview comment
  destroyOnUnmount: false // keeps form data from being reset after submit 
  // it can then be made available to the SurveyFormReview component
})(SurveyForm);