export function debounceFunction(callback, _timeout) {
  let timeout = _timeout;
  let timoutId;
  return function () {
    clearTimeout(timoutId);
    timoutId = setTimeout(function () {
      callback();
    }, timeout);
  };
}
