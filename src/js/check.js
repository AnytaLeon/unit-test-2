export default function checkHealth(player) {
  if (player.health > 50) {
    return 'healthy';
  } if (player.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}

export function sortPlayers(array) {
  return array.sort((a, b) => (parseInt(b.health, 10) - parseInt(a.health, 10)));
}
