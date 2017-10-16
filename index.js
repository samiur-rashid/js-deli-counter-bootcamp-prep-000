var katzDeliLine = [];
var i = 1;

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return console.log("Welcome, " + person + ".  You are number " + i + " in line.")
  i++;
}
