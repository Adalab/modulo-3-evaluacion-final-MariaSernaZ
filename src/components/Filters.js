import React from "react";
import FilterByName from "./FilterByName";
import FilterByEpisode from "./FilterByEpisode";

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
      <FilterByEpisode
        filterEpisode={props.filterEpisode}
        handleFilter={props.handleFilter}
      />
    </form>
  );
};

export default Filters;
