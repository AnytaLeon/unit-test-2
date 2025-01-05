import checkHealth, { sortPlayers } from '../js/check';

test('check player health -healthy ', () => {
  const player = { name: 'Маг', health: 90 };
  const health = checkHealth(player);
  expect(health).toBe('healthy');
});

test('check player health - wounded', () => {
  const player = { name: 'Маг', health: 15 };
  const health = checkHealth(player);
  expect(health).toBe('wounded');
});

test('check player health - critical', () => {
  const player = { name: 'Маг', health: 10 };
  const health = checkHealth(player);
  expect(health).toBe('critical');
});

test('checking the sorting of players', () => {
  const players = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const sortedPlayers = sortPlayers(players);
  expect(sortedPlayers).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
