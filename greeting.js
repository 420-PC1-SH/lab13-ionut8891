function greet(name) {
  if (name === undefined || name === null || name === "")
    return 'Hello there!';
  else
  return `Hello, ${name}!`;
}

module.exports = greet;