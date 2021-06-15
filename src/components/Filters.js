import React from "react";
import FilterByName from "./FilterByName";

const Filters = (props) => {
  return (
    <form>
      <FilterByName
        filterName={props.filterName}
        handleFilter={props.handleFilter}
      />
    </form>
  );
};

export default Filters;
