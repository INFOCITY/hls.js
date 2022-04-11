/**
 * MP4 demuxer
 */
import { Demuxer, DemuxerResult, PassthroughVideoTrack, DemuxedAudioTrack, DemuxedUserdataTrack, DemuxedMetadataTrack, KeyData } from '../types/demuxer';
import type { HlsEventEmitter } from '../events';
import type { HlsConfig } from '../config';
declare class MP4Demuxer implements Demuxer {
    static readonly minProbeByteLength = 1024;
    private remainderData;
    private config;
    constructor(observer: HlsEventEmitter, config: HlsConfig);
    resetTimeStamp(): void;
    resetInitSegment(): void;
    resetContiguity(): void;
    static probe(data: any): boolean;
    demux(data: any): DemuxerResult;
    flush(): {
        audioTrack: DemuxedAudioTrack;
        avcTrack: PassthroughVideoTrack;
        id3Track: DemuxedMetadataTrack;
        textTrack: DemuxedUserdataTrack;
    };
    demuxSampleAes(data: Uint8Array, keyData: KeyData, timeOffset: number): Promise<DemuxerResult>;
    destroy(): void;
}
export default MP4Demuxer;
//# sourceMappingURL=mp4demuxer.d.ts.map