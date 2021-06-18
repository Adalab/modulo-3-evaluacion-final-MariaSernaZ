import React from "react";

const FilterByEpisode = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "episode",
    });
  };

  return (
    <>
      <input
        className="inputSearch"
        type="number"
        placeholder="Número de episodio"
        name="episode"
        id="episode"
        value={props.filterEpisode}
        onChange={handleInput}
      />
    </>
  );
};

export default FilterByEpisode;
