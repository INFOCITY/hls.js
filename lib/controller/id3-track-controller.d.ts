import { Events } from '../events';
import type { BufferFlushingData, FragParsingMetadataData, MediaAttachedData } from '../types/events';
import type { ComponentAPI } from '../types/component-api';
declare global {
    interface Window {
        WebKitDataCue: VTTCue | void;
    }
}
declare class ID3TrackController implements ComponentAPI {
    private hls;
    private id3Track;
    private media;
    constructor(hls: any);
    destroy(): void;
    private _registerListeners;
    private _unregisterListeners;
    protected onMediaAttached(event: Events.MEDIA_ATTACHED, data: MediaAttachedData): void;
    protected onMediaDetaching(): void;
    getID3Track(textTracks: TextTrackList): TextTrack | void;
    onFragParsingMetadata(event: Events.FRAG_PARSING_METADATA, data: FragParsingMetadataData): void;
    onBufferFlushing(event: Events.BUFFER_FLUSHING, { startOffset, endOffset, type }: BufferFlushingData): void;
}
export default ID3TrackController;
//# sourceMappingURL=id3-track-controller.d.ts.map