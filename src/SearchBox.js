import React from 'react';
import Checkbox from './Checkbox';
import './SearchBox.css';


export default function SearchBox(props) {
  const checkboxes = Object.keys(props.fieldsToSearch).map(value => {
    return (
      <Checkbox 
        key={value} 
        checkboxName={value} 
        fieldsToSearch={props.fieldsToSearch} 
        toggleCheck={props.toggleCheck}  
      />
    );
  })  

  return (
    <div className='search-box'>
      <form 
        action="#" 
        name="search-form" 
        onSubmit={(e) => props.submitSearch(e)}
      > 
      <div className="form-checkboxes">
        {checkboxes}   
      </div>
        <input 
          type="text" 
          className="search-imput" 
          name="search-input" 
          id="search-input" 
        />
        <button 
          type="submit"
          className="search-btn"
        >
          Search
        </button>
      </form>
    </div>
  );
}