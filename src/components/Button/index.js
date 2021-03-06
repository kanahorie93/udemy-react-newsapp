import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick, children, className='', style }) =>
  <button 
    className= { className }
    onClick={ onClick }
    style={ style }
  >
    { children }  
  </button>

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

Button.defaultProps = {
  className: ''
}

export const Loading = () => 
  <div>
    <h2>Loading...</h2>
  </div>

export const Sort = ({ sortKey, onSort, children, className, activeSortKey }) => {
    const sortClass = ['btn default'];

    if (sortKey === activeSortKey) {
      sortClass.push('btn btn-primary');
    }

    return(
      <Button
        className={ sortClass.join(' ') }
        onClick={ () => onSort(sortKey) }
      >
        { children }
      </Button>
    )
}