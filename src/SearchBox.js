import React from 'react';

export default function SearchBox(props) {
  return (
    <div className='search-box'>
      <form 
        action="#" 
        name="search-form" 
        onSubmit={(e) => props.submitSearch(e)}
      >
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