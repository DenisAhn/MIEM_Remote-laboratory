import { action, makeObservable, observable } from 'mobx';
export class TabsStore {
    constructor(params) {
        this.items = [];
        this.params = params;
        this.items = params.tabs;
        this.currentTab = params.tabs.find((item) => item.key === params.defaultTab);
        makeObservable(this, {
            setActiveTab: action.bound,
            currentTab: observable.ref,
            items: observable.ref,
        });
    }
    setActiveTab(tab) {
        this.currentTab = tab;
    }
    destroy() { }
}
