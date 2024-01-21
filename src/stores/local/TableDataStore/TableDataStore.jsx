import { makeAutoObservable } from 'mobx';
class AppStore {
    constructor() {
        this.textFile = null;
        this.sofFile = null;
        this.otherTextFile = null;
        this.otherSofFile = null;
        this.dataArray = [];
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
