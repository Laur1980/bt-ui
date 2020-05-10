import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import './add-bug.css';
import { Form, Field } from 'react-final-form';
import * as bugStatuses from '../../utils/bugStatuses';
import * as bugActions from '../../store/actions/bugActions';
import { required, minLenght, composeValidators } from '../../utils/validators';

import { connect } from 'react-redux';

const requiredAndMinLen = composeValidators(required,minLenght);

const AddBug = (props) => {

  const [state,setState] = useState({hasRedirect:false});

    const onSubmit= event =>{
      const id = props.bugs.length+1;
      const key = `${event.bugName.substring(0, 2).toUpperCase()}-${props.bugs.length}`;
      const bug = {
        id: id,
        key: key,
        name: event.bugName,
        description: event.description,
        status: event.status,
        created_on: new Date().toDateString(),
        created_by: {
          username: 'gogu'
        }
      };
      props.onAddBug(bug);
      setState({ hasRedirect: true });
      console.log('OnSubmit: ',event);
    };

    const showData = (values) => {
        return !values || values.pristine ? null : <pre>{JSON.stringify(values, 0, 2)}</pre>;
    };

  return state.hasRedirect ? (
    <Redirect to='/' />
  ) : (
      <div className='add-bug-container'>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit || pristine}>
              <Field
                name='bugName'
                validate={requiredAndMinLen}
                render={({ input, meta }) => (
                  <p>
                    <label>Name </label>
                    <input type='text' {...input} placeholder='Bug name' />
                    {meta.touched && meta.error && (
                      <span className='error'>{meta.error}</span>
                    )}
                  </p>
                )}
              />
              <Field
                name='description'
                validate={required}
                render={({ input, meta }) => (
                  <p>
                    <label>Description </label>
                    <textarea
                      {...input}
                      placeholder='A succint description of the bug...'
                    />
                    {meta.touched && meta.error && (
                      <span className='error'>{meta.error}</span>
                    )}
                  </p>
                )}
              />

              <Field
                name='status'
                validate={required}
                render={({ input, meta }) => (
                  <p>
                    <label>Status </label>
                    <br/>
                    <select {...input}>
                      <option />
                      <option value={bugStatuses.BUG_STATUS_OPEN}>Open</option>
                      <option value={bugStatuses.BUG_STATUS_IN_PROGRESS}>
                        In progress
                      </option>
                      <option value={bugStatuses.BUG_STATUS_SOLVED}>
                        Solved
                      </option>
                      <option value={bugStatuses.BUG_STATUS_IGNORED}>
                        Ignored
                      </option>
                    </select>
                    <br />
                    {meta.touched && meta.error && (
                      <span className='error'>{meta.error}</span>
                    )}
                  </p>
                )}
              />

              <button type='submit' disabled={submitting}>
                Submit
              </button>
              {showData(values)}
              <pre>{JSON.stringify(submitting)}</pre>
              <pre>{JSON.stringify(pristine)}</pre>
            </form>
          )}
        />
      </div>
    );
};
const mapStoreToProps = (state) => {
  return {
    bugs: state.bugState.bugs
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      onUpdatedBug: (bug) =>
        dispatch({ type: bugActions.BUG_UPDATED, payload: {bug: bug} }),
      onAddBug: (bug) => dispatch({ type: bugActions.BUG_ADDED, payload: { bug: bug } })
    };
};
export default connect(mapStoreToProps,mapDispatchToProps)(AddBug);