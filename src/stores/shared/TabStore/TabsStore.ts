import { Dayjs } from 'dayjs';
import { action, makeObservable, observable } from 'mobx';
import * as React from 'react'
import { ILocalStore } from 'stores/interfaces';

type OptionEntity<
  K = string | number,
  V = string | React.ReactNode | Dayjs
> = {
  key: K;
  value: V;
};

type TabsStoreParams<
  K extends string = string,
  V extends string | Dayjs = string
> = {
  tabs: OptionEntity<K, V>[];
  defaultTab: K;
};


export class TabsStore<
  K extends string = string,
  V extends string | Dayjs = string
> implements ILocalStore
{
  readonly params: TabsStoreParams<K, V>;

  items: OptionEntity<K, V>[] = [];

  currentTab?: OptionEntity<K, V>;

  constructor(params: TabsStoreParams<K, V>) {
    this.params = params;

    this.items = params.tabs;

    this.currentTab = params.tabs.find(
      (item) => item.key === params.defaultTab
    );

    makeObservable(this, {
      setActiveTab: action.bound,

      currentTab: observable.ref,
      items: observable.ref,
    });
  }

  setActiveTab(tab: OptionEntity<K, V>): void {
    this.currentTab = tab;
  }

  destroy() {}
}
