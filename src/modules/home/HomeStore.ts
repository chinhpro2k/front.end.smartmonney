import {makeObservable} from "mobx";

class HomeStore{
    constructor() {
        makeObservable(this,{

        })
    }
}
export const homeStore=new HomeStore();