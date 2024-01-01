function getChineseZodiacSign(birthYear) {
  const zodiacAnimals = ['Monkey🐒', 'Rooster🐓', 'Dog🐕', 'Pig🐖', 'Rat🐀', 'Ox🐂', 'Tiger🐅', 'Rabbit🐇', 'Dragon🐉', 'Snake🐍', 'Horse🐎', 'Sheep🐑'];

  // Calculate the Chinese zodiac year.
  const zodiacYear = birthYear % 12;

  // Return the Chinese zodiac animal for the calculated year.
  return zodiacAnimals[zodiacYear];
}

// Usage example
const birthYear = 2024; // Replace with the desired birth year
const chineseZodiac = getChineseZodiacSign(birthYear);
console.log(`Chinese zodiac sign: ${chineseZodiac}`);
