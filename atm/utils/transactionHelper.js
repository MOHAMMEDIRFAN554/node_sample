function addTransaction(account, type, amount, extra) {
  const txn = {
    type,
    amount,
    date: new Date().toISOString().slice(0, 10)
  };
  if (extra && typeof extra === 'object') {
    Object.keys(extra).forEach(k => txn[k] = extra[k]);
  }

  if (!account.transactions) account.transactions = [];
  account.transactions.push(txn);

  if (account.transactions.length > 200) {
    account.transactions = account.transactions.slice(-200);
  }
  return account.transactions;
}

module.exports = { addTransaction };
