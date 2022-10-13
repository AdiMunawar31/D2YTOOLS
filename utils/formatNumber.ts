export const formatNumber = (num: number) => {
  return Intl.NumberFormat("id-Id").format(num);
};