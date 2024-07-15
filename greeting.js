function greet(name) {
  if (name === undefined || name === null || name === "")
    return 'Hello there!';
  else if(name===name.toUpperCase())
    return `HELLO ${name}!`;
  else
  return `Hello, ${name}!`;
}

module.exports = greet;