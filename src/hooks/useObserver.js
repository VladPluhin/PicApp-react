import {useEffect, useRef} from "react";

export const useObserver = (ref, data,callback,) => {
     const observer = useRef();

    useEffect(() => {
        if(data === null) return;
        if(observer.current) observer.current.disconnect();

        var cb = function(entries, observer) {
            if (entries[0].isIntersecting) {
                callback()
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [data])
}
