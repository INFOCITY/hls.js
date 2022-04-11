import type { HlsEventEmitter } from '../events';
import { InitSegmentData, Remuxer, RemuxerResult, RemuxedMetadata, RemuxedTrack, RemuxedUserdata } from '../types/remuxer';
import { PlaylistLevelType } from '../types/loader';
import type { DemuxedAudioTrack, DemuxedAvcTrack, DemuxedMetadataTrack, DemuxedUserdataTrack } from '../types/demuxer';
import type { Fragment } from '../loader/fragment';
import type { HlsConfig } from '../config';
export default class MP4Remuxer implements Remuxer {
    private observer;
    private config;
    private typeSupported;
    private ISGenerated;
    private _initPTS;
    private _initDTS;
    private nextAvcDts;
    private nextAudioPts;
    private isAudioContiguous;
    private isVideoContiguous;
    constructor(observer: HlsEventEmitter, config: HlsConfig, typeSupported: any, vendor?: string);
    destroy(): void;
    resetTimeStamp(defaultTimeStamp: any): void;
    resetNextTimestamp(): void;
    resetInitSegment(): void;
    getVideoStartPts(videoSamples: any): any;
    remux(audioTrack: DemuxedAudioTrack, videoTrack: DemuxedAvcTrack, id3Track: DemuxedMetadataTrack, textTrack: DemuxedUserdataTrack, timeOffset: number, accurateTimeOffset: boolean, flush: boolean, playlistType: PlaylistLevelType): RemuxerResult;
    generateIS(audioTrack: DemuxedAudioTrack, videoTrack: DemuxedAvcTrack, timeOffset: any): InitSegmentData | undefined;
    remuxVideo(track: DemuxedAvcTrack, timeOffset: number, contiguous: boolean, audioTrackLength: number): RemuxedTrack | undefined;
    remuxAudio(track: DemuxedAudioTrack, timeOffset: number, contiguous: boolean, accurateTimeOffset: boolean, videoTimeOffset?: number): RemuxedTrack | undefined;
    remuxEmptyAudio(track: DemuxedAudioTrack, timeOffset: number, contiguous: boolean, videoData: Fragment): RemuxedTrack | undefined;
    remuxID3(track: DemuxedMetadataTrack, timeOffset: number): RemuxedMetadata | undefined;
    remuxText(track: DemuxedUserdataTrack, timeOffset: number): RemuxedUserdata | undefined;
}
export declare function normalizePts(value: number, reference: number | null): number;
//# sourceMappingURL=mp4-remuxer.d.ts.map