const clone = obj => JSON.parse(JSON.stringify(obj));

const findIndexById = (id, list) => {
  const index = list.findIndex(listItem => listItem.id === id);

  if (index < 0) {
    const message = `Cant find item with ID: ${ id }`;

    console.log(`ERROR: ${ message }`);
    throw new Error(message);
  }

  return index;
}

const returnDateString = () => new Date().toString();

module.exports = { clone, findIndexById, returnDateString };