const Counter = require('../model/counterModel');

async function getNextSequence(id) {
  const counter = await Counter.findByIdAndUpdate(
    id,
    { $inc: { seq: 1 } },
    { new: true, upsert: true } 
  );
  return counter.seq;
}

module.exports = getNextSequence;
