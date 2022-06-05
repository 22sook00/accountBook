export const ttlAmountByCategory = (arr: any[], type: string) => {
  const result = arr
    .filter((el) => {
      return el?.category?.toLocaleLowerCase() === type;
    })
    .reduce((acc, cur) => {
      return acc + +cur.price;
    }, 0);
  return { type: type, amount: result };
};
