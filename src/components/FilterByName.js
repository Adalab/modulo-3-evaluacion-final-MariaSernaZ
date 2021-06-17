import React from "react";

const FilterByName = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <>
      <label htmlFor="name"></label>
      <input
        className="inputSearch"
        type="text"
        placeholder="Buscar por nombre"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleInput}
      />
    </>
  );
};

export default FilterByName;
