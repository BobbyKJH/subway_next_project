// Kcal , 반올림
export const AddCommas = (num: number) =>
  Math.round(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
