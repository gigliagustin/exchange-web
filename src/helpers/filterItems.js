/* istanbul ignore next */
class GraphItems {
  constructor(date, price) {
    this.date = date;
    this.price = price;
  }
}

/* istanbul ignore next */
export const filterItems = (response) => {
  const items = response.data.data[0].items.map(item => {
    const { date, price } = item;
    return new GraphItems(date, price);
  });
  const newItems = items.reverse();
  return newItems;
};
