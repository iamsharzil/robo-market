export const convertAmountToBaht = (amount: number) => {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  }).format(amount);
};
