const checkNames = require('./app');

test('should return an empty array', () => {
  const result = checkNames(['Momo', 'Hadji', 'Leo']);
  expect(result).toEqual(['Momo', 'Hadji', 'Leo']);
});