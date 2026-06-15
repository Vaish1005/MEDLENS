export const getSavedCases = () => {
  return JSON.parse(localStorage.getItem("savedCases")) || [];
};

export const saveCase = (
  query,

  response,
) => {
  const previousCases = getSavedCases();

  const newCase = {
    id: Date.now(),

    query,

    response,

    date: new Date().toLocaleString(),
  };

  previousCases.unshift(newCase);

  localStorage.setItem(
    "savedCases",

    JSON.stringify(previousCases),
  );
};

export const deleteCase = (id) => {
  const updatedCases = getSavedCases().filter((item) => item.id !== id);

  localStorage.setItem(
    "savedCases",

    JSON.stringify(updatedCases),
  );
};

export const clearSavedCases = () => {
  localStorage.removeItem("savedCases");
};

export const getCurrentCase = () => {
  return JSON.parse(localStorage.getItem("currentCase"));
};

export const setCurrentCase = (item) => {
  localStorage.setItem(
    "currentCase",

    JSON.stringify(item),
  );
};

export const clearCurrentCase = () => {
  localStorage.removeItem("currentCase");
};
