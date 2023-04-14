/**
 * Let's make a game 🕹
 */

const position = { x: 0, y: 0 };

type location = 'up' | 'down' | 'left' | 'right';

function move(location: location) {
  switch (location) {
    case 'up':
      return position.x, (position.y += 1);
    case 'down':
      return position.x, (position.y -= 1);
    case 'left':
      return (position.x -= 1), position.y;
    case 'right':
      return (position.x += 1), position.y;
    default:
      break;
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
