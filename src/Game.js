let knightPosition = [1, 7];
let observer = null;

export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition
  const dx = toX - x
  const dy = toY - y

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}

function emitChange() {
  observer(knightPosition);
}

export function observe(receive) {
  // const randPos = () => Math.floor(Math.random() * 8)
  // setInterval(() => receive([randPos(), randPos()]), 500)
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = receive;
  emitChange();
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}
