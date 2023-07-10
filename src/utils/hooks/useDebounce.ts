import { useRef, useEffect, useMemo } from 'react';

import { debounce } from '../timers';

const useDebounce = (callback: Function) => {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, 500);
  }, []);

  return debouncedCallback;
};

export default useDebounce;
