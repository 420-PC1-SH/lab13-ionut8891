function greet(name) {
  if (isGreetingForMultipleNames(name)) {
    return `Hello, ${name.slice(0, -1).join(', ')}, and ${name.slice(-1)}!`;
  }
  if(Array.isArray(name) && name.length === 2)
    return `Hello, ${name[0]} and ${name[1]}!`;

  if (name === undefined || name === null || name === "")
    return 'Hello there!';
  else if(name===name.toUpperCase())
    return `HELLO ${name}!`;
  else
  return `Hello, ${name}!`;

}
function isGreetingForMultipleNames(name) {
  return Array.isArray(name) && name.length > 2;
}
function isGreetingForTwoNames(name) {
  return `Hello, ${name[0]} and ${name[1]}!`;
}

module.exports = greet;