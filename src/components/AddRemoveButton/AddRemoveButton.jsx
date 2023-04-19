import React from 'react';
import { MINUS_ICON, PLUS_ICON } from '../../assets/images';

const AddRemoveButton = props => {
  const { handleAddClick, handleRemoveClick, count } = props;
  return (
    <div className="add-remove-btn-section">
      <button type="button" className="text-btn" onClick={handleRemoveClick}>
        <img src={MINUS_ICON} alt="plus-icon" />
      </button>
      <span>{count}</span>
      <button type="button" className="text-btn" onClick={handleAddClick}>
        <img src={PLUS_ICON} alt="plus-icon" />
      </button>
    </div>
  );
};

export default AddRemoveButton;
