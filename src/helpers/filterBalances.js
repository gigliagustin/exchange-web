/* istanbul ignore next */
export const filterBalances = (contractAddress, balances) => {
  const balance = balances?.data.data;
  const arrBal = balance?.items;
  const response = arrBal?.find(
    currBalance => currBalance.contract_address === contractAddress,
  );
  return response;
};
