//SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import _ from 'lodash';

const FIELDS = [
  {label: 'Survey Title', name: 'title' },
  {label: 'Subject Line', name: 'subject' },
  {label: 'Email Body', name: 'body' },
  {label: 'Recipient List', name: 'emails' }
];


class SurveyForm extends Component {


renderFields () {
  return _.map(FIELDS, ({ label, name })=>{
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

  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(values=> console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}

function validate (values) { // values are coming from redux-form values
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _.each(FIELDS, ({ name }) => {
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
  form: 'surveyForm'
})(SurveyForm);