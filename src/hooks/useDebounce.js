import { useCallback, useRef } from 'react';

/**
 * Custom hook to debounce a callback function.
 * @param {function} callback - Callback function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {function} - Debounced callback function
 */
const useDebounce = (callback, delay = 500) => {
    const timerRef = useRef();

    const debounced = useCallback(
        (...args) => {
            timerRef.current && clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => callback(...args), delay);
        },
        [callback, delay],
    );

    return debounced;
};

export default useDebounce;
