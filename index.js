var katzDeliLine = [];
var i = 0;

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  i++;
  console.log("Welcome, " + person + ".  You are number " + i + " in line.")
  return katzDeliLine;
}

function nowServing(katzDeliLine) {
  console.log("Currently serving " + katzDeliLine[1]);
  return katzDeliLine;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    
  }
  else {
    return console.log("The line is currently empty")
  }
}
