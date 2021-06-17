import React from "react";
import FilterByName from "./FilterByName";

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleForm} className="formWrap">
      <FilterByName
        filterName={props.filterName}
        handleFilter={props.handleFilter}
      />
    </form>
  );
};

export default Filters;
