var katzDeliLine = [];
var i = 0;

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  i++;
  console.log("Welcome, " + person + ".  You are number " + i + " in line.")
  return katzDeliLine;
}

function nowServing(katzDeliLine) {
  console.log("Current serving " + katzDeliLine[1])
  katzDeliLine.unshift
  return katzDeliLine;
}
