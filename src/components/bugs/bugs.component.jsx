import React from 'react';
import { connect } from 'react-redux';
import Bug from '../bug/bug.component';
import * as bugActions from '../../store/actions/bugActions';

class Bugs extends React.PureComponent {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = (id) => {
    this.props.onDeleteBug(id);
  };

  render(){
  return (
    <div className='bugs-container'>
      {this.props.bugs.map( bug => 
      <Bug key={bug.id} 
           data={bug} 
          onDelete={this.handleDelete} />)}
    </div>
    );
  };
};



const mapStoreToProps = (state) => {
  return {
    bugs: state.bugState.bugs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBugs: (bugs) => dispatch({ type: bugActions.GET_BUGS, payload: bugs}),
    onDeleteBug: (id) => dispatch({ type: bugActions.BUG_DELETED, payload: {id:id }})
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Bugs);
