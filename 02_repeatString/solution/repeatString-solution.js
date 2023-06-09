const repeatString = function(word, time) {
  if (time < 0)  return "error";
  let string = "";
  for ( let i=0; i < time; i++) {
    string += word
  }
  return string
};
console.log(repeatString('hey', 3))


module.exports = repeatString;
