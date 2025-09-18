const { findAccount, createAccount, updateAccountByCard, saveAccountDoc } = require('../models/accountModel');
const { addTransaction } = require('../utils/transactionHelper');
import Atm from '../models/userModel';
const INITIAL_BALANCE = 0;
const WITHDRAW_LIMIT = 5000;     
const FAST_CASH_OPTIONS = [500, 1000, 5000];

function welcome(req, res) {
  res.send("1)Please insert your card /insert \n  2)generate new card → /generate");
}

// POST /insert  { cardNumber }
function insertCard(req, res) {
  const cardNumber = String(req.body.cardNumber || '');
  findAccount(cardNumber)
    .then(acc => {
      if (!acc) return res.status(404).send("Card not found");
      res.send("Enter your PIN at /pinenter");
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

// POST /generate  { name, accountNumberLast4, cardNumberLast4, mobileNumber, pin }
function generateCard(req, res) {
  const b = req.body || {};
  const doc = {
    name: b.name,
    accountNumberLast4: String(b.accountNumberLast4 || ''),
    cardNumber: String(b.cardNumberLast4 || ''),
    mobileNumber: String(b.mobileNumber || ''),
    email: b.email || '',
    pin: String(b.pin || ''),
    balance: INITIAL_BALANCE,
    blocked: false,
    transactions: []
  };

  if (!doc.name || !doc.accountNumberLast4 || !doc.cardNumber || !doc.mobileNumber || !doc.pin) {
    return res.status(400).send("All fields are required: name, accountNumberLast4, cardNumberLast4, mobileNumber, pin");
  }

  findAccount(doc.cardNumber)
    .then(existing => {
      if (existing) return res.status(400).send("Card already exists");
      return createAccount(doc)
        .then(() => res.send("Card created successfully, please login with /insert"));
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

// POST /pinenter { cardNumber, pin }
function pinEnter(req, res) {
  const cardNumber = String(req.body.cardNumber || '');
  const pin = String(req.body.pin || '');

  findAccount(cardNumber)
    .then(acc => {
      if (!acc) return res.status(404).send("Card not found");
      if (acc.blocked) return res.send("Card is blocked");
      if (acc.pin === pin) return res.send("Authentication successful");
      res.send("Invalid PIN, try again");
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

// GET /balance   (body: { cardNumber })
function balance(req, res) {
  const cardNumber = String((req.body && req.body.cardNumber) || '');
  findAccount(cardNumber)
    .then(acc => {
      if (!acc) return res.status(404).send("Card not found");
      res.json({ balance: acc.balance });
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

// GET /mini-statement  (body: { cardNumber })
function miniStatement(req, res) {
  const cardNumber = String((req.body && req.body.cardNumber) || '');
  findAccount(cardNumber)
    .then(acc => {
      if (!acc) return res.status(404).send("Card not found");
      const txns = (acc.transactions || []).slice(-10).reverse();
      res.json({ transactions: txns });
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

// POST /withdraw { cardNumber, amount }
function withdraw(req, res) {
  const cardNumber = String(req.body.cardNumber || '');
  const amount = Number(req.body.amount || 0);

  if (!amount || amount <= 0) return res.status(400).send("Invalid amount");
  if (amount > WITHDRAW_LIMIT) return res.send("Limit exceeded,you can withdraw upto 5000");

  findAccount(cardNumber)
    .then(acc => {
      if (!acc) return res.status(404).send("Card not found");
      if (acc.blocked) return res.send("Card is blocked");
      if (acc.balance < amount) return res.send("Insufficient balance");

      acc.balance -= amount;
      addTransaction(acc, 'Withdrawal', amount);

      return saveAccountDoc(acc).then(() =>
        res.send("Withdrawal successful, updated balance: " + acc.balance)
      );
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

// POST /deposit { cardNumber, amount }
function deposit(req, res) {
  const cardNumber = String(req.body.cardNumber || '');
  const amount = Number(req.body.amount || 0);

  if (!amount || amount <= 0) return res.status(400).send("Invalid amount");

  findAccount(cardNumber)
    .then(acc => {
      if (!acc) return res.status(404).send("Card not found");
      if (acc.blocked) return res.send("Card is blocked");

      acc.balance += amount;
      addTransaction(acc, 'Deposit', amount);

      return saveAccountDoc(acc).then(() =>
        res.send("Deposit successful, updated balance: " + acc.balance)
      );
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

// POST /pinchange { cardNumber, oldPin, newPin }
function pinChange(req, res) {
  const cardNumber = String(req.body.cardNumber || '');
  const oldPin = String(req.body.oldPin || '');
  const newPin = String(req.body.newPin || '');

  if (!oldPin || !newPin) return res.status(400).send("oldPin and newPin are required");

  findAccount(cardNumber)
    .then(acc => {
      if (!acc) return res.status(404).send("Card not found");
      if (acc.blocked) return res.send("Card is blocked");
      if (acc.pin !== oldPin) return res.send("Invalid old PIN");

      acc.pin = newPin;
      return saveAccountDoc(acc).then(() =>
        res.send("PIN changed successfully")
      );
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

// POST /transfer { fromCard, toCard, amount }
function transfer(req, res) {
  const fromCard = String(req.body.fromCard || '');
  const toCard = String(req.body.toCard || '');
  const amount = Number(req.body.amount || 0);

  if (!amount || amount <= 0) return res.status(400).send("Invalid amount");
  if (fromCard === toCard) return res.status(400).send("Cannot transfer to same card");

  let fromAcc, toAcc;
  findAccount(fromCard)
    .then(acc1 => {
      if (!acc1) return Promise.reject("From account not found");
      fromAcc = acc1;
      return findAccount(toCard);
    })
    .then(acc2 => {
      if (!acc2) return Promise.reject("To account not found");
      toAcc = acc2;

      if (fromAcc.blocked) return Promise.reject("From card is blocked");
      if (toAcc.blocked) return Promise.reject("To card is blocked");
      if (fromAcc.balance < amount) return Promise.reject("Insufficient balance");

      fromAcc.balance -= amount;
      toAcc.balance += amount;

      addTransaction(fromAcc, 'Transfer Out', amount, { toCard: toCard });
      addTransaction(toAcc, 'Transfer In', amount, { fromCard: fromCard });
      return saveAccountDoc(fromAcc).then(() => saveAccountDoc(toAcc));
    })
    .then(() => res.send("Transfer successful, updated balance: " + fromAcc.balance))
    .catch(err => {
      const msg = (err && err.message) ? err.message : String(err);
      if (msg.includes('not found')) return res.status(404).send(msg);
      res.status(400).send(msg);
    });
}

// POST /billpay { cardNumber, service, amount }
function billPay(req, res) {
  const cardNumber = String(req.body.cardNumber || '');
  const service = String(req.body.service || '');
  const amount = Number(req.body.amount || 0);

  if (!service) return res.status(400).send("service is required");
  if (!amount || amount <= 0) return res.status(400).send("Invalid amount");

  findAccount(cardNumber)
    .then(acc => {
      if (!acc) return res.status(404).send("Card not found");
      if (acc.blocked) return res.send("Card is blocked");
      if (acc.balance < amount) return res.send("Insufficient balance");

      acc.balance -= amount;
      addTransaction(acc, 'Bill Payment', amount, { service });

      return saveAccountDoc(acc).then(() =>
        res.send("Bill paid successfully for " + service + ", balance: " + acc.balance)
      );
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

// POST /loanpay { cardNumber, loanId, amount }
function loanPay(req, res) {
  const cardNumber = String(req.body.cardNumber || '');
  const loanId = String(req.body.loanId || '');
  const amount = Number(req.body.amount || 0);

  if (!loanId) return res.status(400).send("loanId is required");
  if (!amount || amount <= 0) return res.status(400).send("Invalid amount");

  findAccount(cardNumber)
    .then(acc => {
      if (!acc) return res.status(404).send("Card not found");
      if (acc.blocked) return res.send("Card is blocked");
      if (acc.balance < amount) return res.send("Insufficient balance");

      acc.balance -= amount;
      addTransaction(acc, 'Loan Payment', amount, { loanId });

      return saveAccountDoc(acc).then(() =>
        res.send("Loan " + loanId + " paid successfully, balance: " + acc.balance)
      );
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

// POST /chequedd { cardNumber, type }
function chequeDD(req, res) {
  const cardNumber = String(req.body.cardNumber || '');
  const type = String(req.body.type || '');

  if (!type) return res.status(400).send("type is required (e.g., ChequeBook or DD)");

  findAccount(cardNumber)
    .then(acc => {
      if (!acc) return res.status(404).send("Card not found");
      if (acc.blocked) return res.send("Card is blocked");
      addTransaction(acc, 'Request', 0, { requestType: type });

      return saveAccountDoc(acc).then(() =>
        res.send(type + " request submitted successfully")
      );
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

// POST /language { language }
function language(req, res) {
  const language = String(req.body.language || 'English');
  res.send("Language set to " + language);
}

// POST /fastcash { cardNumber, amount }   amount ∈ {500,1000,5000}
function fastCash(req, res) {
  const cardNumber = String(req.body.cardNumber || '');
  const amount = Number(req.body.amount || 0);

  if (FAST_CASH_OPTIONS.indexOf(amount) === -1) {
    return res.send("Invalid FastCash amount (choose 500, 1000, 5000)");
  }

  findAccount(cardNumber)
    .then(acc => {
      if (!acc) return res.status(404).send("Card not found");
      if (acc.blocked) return res.send("Card is blocked");
      if (acc.balance < amount) return res.send("Insufficient balance");

      acc.balance -= amount;
      addTransaction(acc, 'FastCash', amount);

      return saveAccountDoc(acc).then(() =>
        res.send("FastCash " + amount + " successful, balance: " + acc.balance)
      );
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

// POST /block { cardNumber }
function blockCard(req, res) {
  const cardNumber = String(req.body.cardNumber || '');

  findAccount(cardNumber)
    .then(acc => {
      if (!acc) return res.status(404).send("Card not found");
      acc.blocked = true;
      return saveAccountDoc(acc).then(() => res.send("Card blocked successfully"));
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

// POST /updatecontact { cardNumber, mobile, email }
function updateContact(req, res) {
  const cardNumber = String(req.body.cardNumber || '');
  const mobile = req.body.mobile ? String(req.body.mobile) : undefined;
  const email = req.body.email ? String(req.body.email) : undefined;

  if (!mobile && !email) return res.status(400).send("Provide mobile and/or email");

  findAccount(cardNumber)
    .then(acc => {
      if (!acc) return res.status(404).send("Card not found");
      if (acc.blocked) return res.send("Card is blocked");

      if (mobile) acc.mobileNumber = mobile;
      if (email) acc.email = email;

      return saveAccountDoc(acc).then(() => res.send("Contact details updated successfully"));
    })
    .catch(err => res.status(500).send(err.message || String(err)));
}

module.exports = {
  welcome,
  insertCard,
  generateCard,
  pinEnter,
  balance,
  miniStatement,
  withdraw,
  deposit,
  pinChange,
  transfer,
  billPay,
  loanPay,
  chequeDD,
  language,
  fastCash,
  blockCard,
  updateContact
};
