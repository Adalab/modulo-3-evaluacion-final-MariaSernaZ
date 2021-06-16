const get = (key) => {
  const lsData = localStorage.getItem(key);
  if (lsData === null) {
    return [];
  } else {
    return JSON.parse(lsData);
  }
};

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const objLs = {
  get: get,
  set: set,
};

export default objLs;
