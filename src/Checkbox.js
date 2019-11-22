import React from 'react';

export default function Checkbox(props) {

  return (
    <>
      <input 
        type="checkbox" 
        name={`${props.checkboxName}-checkbox`}
        id={`${props.checkboxName}-checkbox`}
        checked={props.fieldsToSearch[props.checkboxName]}
        onChange={() => props.toggleCheck(props.checkboxName)}
      />
      <label htmlFor={`${props.checkboxName}-checkbox`}>{props.checkboxName}</label>
    </>
  );
}