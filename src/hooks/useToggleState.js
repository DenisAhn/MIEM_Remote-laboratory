import * as React from 'react';
const useToggleState = (initialState = false) => {
    const [opened, setOpened] = React.useState(initialState);
    const open = React.useCallback(() => setOpened(true), []);
    const close = React.useCallback(() => setOpened(false), []);
    const toggle = React.useCallback(() => setOpened((o) => !o), []);
    return {
        opened,
        open,
        close,
        toggle,
    };
};
export default useToggleState;
