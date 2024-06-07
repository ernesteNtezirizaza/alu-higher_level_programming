#!/usr/bin/node
const data = require('./101-data');
const inputDict = data.dict;
const outputDict = {};
for (const userId in inputDict) {
  const occurrences = inputDict[userId];
  if (!outputDict[occurrences]) {
    outputDict[occurrences] = [];
  }
  outputDict[occurrences].push(userId)
}
console.log(outputDict);
