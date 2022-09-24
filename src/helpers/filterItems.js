export const filterItems = (response) => {
  const items = response.data.data[0].items.map(item => {
    return item;
  });
  return items;
};
