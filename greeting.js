function greet(name) {
  if (!name)
    return 'Hello there!';
  else
  return `Hello, ${name}!`;
}

module.exports = greet;