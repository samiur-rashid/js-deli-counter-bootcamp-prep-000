var katzDeliLine = [];
var i = 0;

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  i++;
  return console.log("Welcome, " + person + ".  You are number " + i + " in line.")
}
