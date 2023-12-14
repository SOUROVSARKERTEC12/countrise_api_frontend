import { useRef } from "react";

export default function useDebounce(search, delay) {
    let timeout = useRef(null);

    function debounced(...params) {
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            search(...params);
        }, delay);
    }

    return debounced;
}
