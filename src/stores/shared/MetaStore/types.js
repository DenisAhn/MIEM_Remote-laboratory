export const getLoadingStartMeta = () => ({
    isLoading: true,
    isError: false,
    isLoaded: false,
});
export const getLoadedErrorMeta = (message) => ({
    isLoading: false,
    isError: true,
    isLoaded: false,
    message,
});
export const getLoadedSuccessMeta = () => ({
    isLoading: false,
    isError: false,
    isLoaded: true,
});
export const getInitialMetaState = () => ({
    isLoading: false,
    isError: false,
    isLoaded: false,
});
export const isInitialMetaState = (meta) => !meta.isLoading && !meta.isLoaded && !meta.isError;
export const mergeMeta = (...items) => {
    if (items.some((item) => item.isError)) {
        return getLoadedErrorMeta();
    }
    if (items.some((item) => item.isLoading)) {
        return getLoadingStartMeta();
    }
    if (items.every((item) => item.isLoaded)) {
        return getLoadedSuccessMeta();
    }
    return getInitialMetaState();
};
