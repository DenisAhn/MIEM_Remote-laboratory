import { action, computed, makeObservable, observable } from 'mobx';
import { getInitialMetaState, getLoadedErrorMeta, getLoadedSuccessMeta, getLoadingStartMeta, isInitialMetaState, } from './types';
/**
 * Mobx класс для флажков isLoading и isError, Возможно потом будет расширяться
 * */
export class MetaStore {
    constructor(meta) {
        this.data = meta || getInitialMetaState();
        makeObservable(this, {
            data: observable.ref,
            isLoading: computed,
            isError: computed,
            isLoaded: computed,
            isInitialMetaState: computed,
            setLoadedStartMeta: action.bound,
            setLoadedSuccessMeta: action.bound,
            setLoadedErrorMeta: action.bound,
            reset: action.bound,
        });
    }
    get isLoading() {
        return this.data.isLoading;
    }
    get isError() {
        return this.data.isError;
    }
    get isInitialMetaState() {
        return isInitialMetaState(this.data);
    }
    get isLoaded() {
        return this.data.isLoaded;
    }
    reset() {
        this.data = getInitialMetaState();
    }
    setLoadedStartMeta() {
        this.data = getLoadingStartMeta();
    }
    setLoadedSuccessMeta() {
        this.data = getLoadedSuccessMeta();
    }
    setLoadedErrorMeta() {
        this.data = getLoadedErrorMeta();
    }
}
MetaStore.merge = (...items) => {
    let data = getInitialMetaState();
    if (items.some((item) => item.isError)) {
        data = getLoadedErrorMeta();
    }
    if (items.some((item) => item.isLoading)) {
        data = getLoadingStartMeta();
    }
    if (items.every((item) => item.isLoaded)) {
        data = getLoadedSuccessMeta();
    }
    return new MetaStore(data);
};
