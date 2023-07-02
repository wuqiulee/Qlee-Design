import { useEffect } from 'react';
function useClickOutside(ref, handler, addClick) {
  if (addClick === void 0) {
    addClick = true;
  }
  if (!addClick) {
    return;
  }
  useEffect(
    function () {
      var listener = function (event) {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('click', listener);
      return function () {
        document.removeEventListener('click', listener);
      };
    },
    [ref, handler]
  );
}
export default useClickOutside;
