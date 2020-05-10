import React from 'react';
import './bug.css';


const handleDelete = (props) => {
  if(!props || !props.data){
    return;
  }
  props.onDelete(props.data.id);
  console.log('Handle Delete')
};

const Bug = (props) => {

  
    const handleUpdate = () => {console.log('Handle Update')};

    return (
      <div className='bug-container'>

        <div className='buttons-container'>
         
          <span className='button-wrapper'>
            <button className='btn-danger' onClick={() => handleDelete(props)}>
              Delete
            </button>
          </span>
          <span className='button-wrapper'>
            <button className='btn-warning' onClick={handleUpdate}>
              Update
            </button>
          </span>
          <span className='button-wrapper'>
            <button className='btn-status-open'>
              {props.data.status}
            </button>
          </span>
        </div>
        <span className='bug-title'>
          Name
         </span>
        <span className='bug-text-body'>
          {props.data.name}
        </span>
        <span className='bug-title'>
          Description
         </span>
        <span className='bug-text-body'>
          {props.data.description}
        </span>
      </div>
    );
};

export default Bug;