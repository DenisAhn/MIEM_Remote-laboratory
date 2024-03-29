import * as React from 'react';
export const useLocalStore = (creator, effect) => {
    const isFirstRender = React.useRef(true);
    const [store, setStore] = React.useState(creator);
    React.useEffect(() => {
        return () => {
            store.destroy();
        };
    }, [store]);
    /** Если effect изменился, пересоздаем стор */
    React.useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setStore((prevStore) => {
            prevStore.destroy();
            return creator();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [effect]);
    return store;
};
