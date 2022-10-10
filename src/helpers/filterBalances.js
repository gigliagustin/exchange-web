export const filterBalances = (contractAddress, balances) => {
  console.log(balances);
  const balance = balances?.data.data;
  const arrBal = balance?.items;
  const response = arrBal?.find(
    currBalance => currBalance.contract_address === contractAddress,
  );
  console.log(response);
  return response;
};
