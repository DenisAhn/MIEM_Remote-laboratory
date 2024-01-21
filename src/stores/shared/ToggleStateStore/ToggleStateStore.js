import { action, computed, makeObservable, observable } from 'mobx';
const TOGGLE_STATE_DEFAULT_PARAMS = {
    defaultValue: false,
};
class ToggleStateStore {
    constructor(params = TOGGLE_STATE_DEFAULT_PARAMS) {
        this._disabled = false;
        this._opened = params.defaultValue;
        makeObservable(this, {
            _opened: observable.ref,
            close: action.bound,
            open: action.bound,
            toggle: action.bound,
            opened: computed,
            _disabled: observable.ref,
            disable: action.bound,
            enable: action.bound,
        });
    }
    get opened() {
        return this._opened;
    }
    get disabled() {
        return this._disabled;
    }
    disable() {
        this._disabled = true;
    }
    enable() {
        this._disabled = false;
    }
    close() {
        this._opened = false;
    }
    open() {
        this._opened = true;
    }
    toggle() {
        this._opened = !this._opened;
    }
    destroy() { }
}
export default ToggleStateStore;
