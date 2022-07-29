import { Events } from '../events';
import type Hls from '../hls';
import { Fragment } from './fragment';
import { LoaderStats, LoaderResponse, LoaderContext } from '../types/loader';
import type { ComponentAPI } from '../types/component-api';
import type { KeyLoadingData } from '../types/events';
interface KeyLoaderContext extends LoaderContext {
    frag: Fragment;
}
export default class KeyLoader implements ComponentAPI {
    private hls;
    loaders: {};
    decryptkey: Uint8Array | null;
    decrypturl: string | null;
    constructor(hls: Hls);
    private _registerListeners;
    private _unregisterListeners;
    destroy(): void;
    onKeyLoading(event: Events.KEY_LOADING, data: KeyLoadingData): void;
    loadsuccess(response: LoaderResponse, stats: LoaderStats, context: KeyLoaderContext): void;
    loaderror(response: LoaderResponse, context: KeyLoaderContext): void;
    loadtimeout(stats: LoaderStats, context: KeyLoaderContext): void;
}
export {};
//# sourceMappingURL=key-loader.d.ts.map