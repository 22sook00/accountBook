export const formatPriceNumber = (number?: number): string => {
  return number?.toLocaleString() ?? "";
};
