import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 2 to equal 5', () => {
  expect(sum(3, 2)).toBe(5);
});

test('adds 7 + 12 to equal 19', () => {
  expect(sum(7, 12)).toBe(19);
});

test('adds 211 + 223 to equal 434', () => {
  expect(sum(211, 223)).toBe(434);
});

test('adds 1 + (-2) to equal -1', () => {
  expect(sum(1, -2)).toBe(-1);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(16, 0.13)).toBe(16.13);

});
