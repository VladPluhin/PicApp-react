import React, {useEffect, useRef} from "react";


export const useObserver = (ref: any, data: any,  callback:  ()=>void) => {
    var observer =  useRef<IntersectionObserver | null>(null);;
    useEffect(() => {
        if(!data) return;
        if(observer.current) observer.current.disconnect();
        var cb = function(entries: any) {
            if (entries[0].isIntersecting) {
                callback()
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, )
}
