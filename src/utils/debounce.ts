export const debounce = (fn, waitInMs: number) => {
  let timeout;

  return function executedFunction (...args) {
    const later = () => {
      clearTimeout(timeout);
      fn(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, waitInMs);
  };
};