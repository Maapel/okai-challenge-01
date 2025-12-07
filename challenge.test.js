test('The sum function adds numbers correctly', () => {
  const sum = require('./index');
  expect(sum(1, 2)).toBe(3);
});
