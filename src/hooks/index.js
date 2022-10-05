export const useElapsed = (seconds) =>
  new Date(seconds * 1000).toISOString().substring(11, 19);

export const useKilometers = (number, decimals) =>
  (number / 1000).toFixed(decimals);

export const useSpeed = (speed) => (speed * 3.600675939165475).toFixed(1);
