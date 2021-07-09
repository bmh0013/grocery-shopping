import React from "react";

const FilterType = ({ items }) => {
  const allTypes = ['All Types'];

  for (const item of items) {
    if ( allTypes.includes(item.type) ) {
      continue;
    } else {
      allTypes.push(item.type)
    }
  };

  return (
    <>
      <select name="types" id="filter-types">
        {allTypes.map( (type, idx) => {
          return (
            <option name="types" value={type} key={idx} >{type}</option>
          )
        })}
      </select>
    </>
  );
};

export default FilterType;
