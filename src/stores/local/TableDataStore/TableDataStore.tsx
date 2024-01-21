import { makeAutoObservable } from 'mobx';

class AppStore {
    textFile = null;
    sofFile = null;
    otherTextFile = null;
    otherSofFile = null;
    dataArray = [];

    constructor() {
        makeAutoObservable(this);
    }

    setTextFile(file) {
        this.textFile = file;
    }

    setSofFile(file) {
        this.sofFile = file;
    }

    setOtherTextFile(file) {
        this.otherTextFile = file;
    }

    setOtherSofFile(file) {
        this.otherSofFile = file;
    }

    setDataArray(data) {
        this.dataArray = data;
    }
}

const TableDataStore = new AppStore();

export default TableDataStore;
