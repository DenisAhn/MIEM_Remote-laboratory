import { configure } from 'mobx';
export const initMobX = () => configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    useProxies: 'always',
});
