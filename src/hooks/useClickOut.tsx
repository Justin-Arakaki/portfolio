import { useEffect, useCallback } from 'react';

export default function useClickOut(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) {
  const handleClickOut = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOut);

    return () => {
      document.removeEventListener('mousedown', handleClickOut);
    };
  }, [handleClickOut]);
}
