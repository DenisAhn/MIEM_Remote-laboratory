import { useScroll } from 'framer-motion';
import * as React from 'react';
export const useOffSetTop = (top = 100, options) => {
    const { scrollY } = useScroll(options);
    const [value, setValue] = React.useState(false);
    React.useEffect(() => scrollY.on('change', (scrollHeight) => {
        if (scrollHeight > top) {
            setValue(true);
        }
        else {
            setValue(false);
        }
    }), [scrollY, top]);
    return value;
};
