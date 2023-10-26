const checkNames = require('./app');

test('should return an empty array', () => {
  const result = checkNames();
  expect(result).toEqual([]);
});