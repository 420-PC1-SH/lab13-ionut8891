function greet(name) {
  if(Array.isArray(name) && name.length === 2)
    return `Hello, ${name[0]} and ${name[1]}!`;
  else if (Array.isArray(name) && name.length > 2)
    return `Hello, ${name.slice(0, -1).join(', ')}, and ${name.slice(-1)}!`;
  else if (name === undefined || name === null || name === "")
    return 'Hello there!';
  else if(name===name.toUpperCase())
    return `HELLO ${name}!`;
  else
  return `Hello, ${name}!`;
}

module.exports = greet;