let savedCart = [];

let colorsTotal = 0;

let uniqueHexCodes = [];

const randomColor = () => {
  const hexLang = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let color = '';
  while (color.length < 6) {
    color += hexLang[Math.floor(Math.random() * hexLang.length)];
  }
  return color;
}

const fetchColors = num => {
  const hexLang = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  while (uniqueHexCodes.length < num) {
    let color = '';
    while (color.length < 6) {
      color += hexLang[Math.floor(Math.random() * hexLang.length)];
    }
    if (!uniqueHexCodes.includes(color)) {
      uniqueHexCodes.push(color);
    }
  }
  return uniqueHexCodes;
};

export { fetchColors, randomColor };
