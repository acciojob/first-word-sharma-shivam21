function firstWord(s) {
  if (!s) return ''; // If the string is empty
  s = s.trim(); // Remove leading/trailing spaces
  const index = s.indexOf(' '); // Find the first space

  if (index === -1) {
    return s; // No space found, return the whole string
  }

  return s.substring(0, index); // Return substring up to first space
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
