export function setDisplay(size) {
  return size === 'fullWidth' ? 'block' : 'inline-block';
}

export function setWidth(size) {
  return size === 'fullWidth' ? '100%' : 'initial';
}
