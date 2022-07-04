export const saveLocalStorage = (key: string, element: object) => {
  let elements = localStorage.getItem(key);

  if (elements != null && elements.length > 0) {
    elements = JSON.parse(elements);
  }

  if (Array.isArray(elements)) {
    elements.push(element);
    localStorage.setItem(key, JSON.stringify(elements));
  } else {
    localStorage.setItem(key, JSON.stringify([element]));
  }
  return element;
};

export const readLocalStorage = (key: string) => {
  var data = localStorage.getItem(key);
  console.log("readLocalStorage> " + key + ": " + data);
  return data ? JSON.parse(data) : [];
};
