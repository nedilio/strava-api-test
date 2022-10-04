export const useElapsed = (seconds) => {
  const elapsed = new Date(seconds * 1000).toISOString().substring(11, 16);
  return elapsed;
};
