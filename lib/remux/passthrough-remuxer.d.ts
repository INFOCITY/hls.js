import type { Remuxer, RemuxerResult } from '../types/remuxer';
import type { DemuxedAudioTrack, DemuxedMetadataTrack, DemuxedUserdataTrack, PassthroughVideoTrack } from '../types/demuxer';
declare class PassThroughRemuxer implements Remuxer {
    private emitInitSegment;
    private audioCodec?;
    private videoCodec?;
    private initData?;
    private initPTS?;
    private initTracks?;
    private lastEndDTS;
    destroy(): void;
    resetTimeStamp(defaultInitPTS: any): void;
    resetNextTimestamp(): void;
    resetInitSegment(initSegment: Uint8Array | undefined, audioCodec: string | undefined, videoCodec: string | undefined): void;
    generateInitSegment(initSegment: Uint8Array | undefined): void;
    remux(audioTrack: DemuxedAudioTrack, videoTrack: PassthroughVideoTrack, id3Track: DemuxedMetadataTrack, textTrack: DemuxedUserdataTrack, timeOffset: number): RemuxerResult;
}
export default PassThroughRemuxer;
//# sourceMappingURL=passthrough-remuxer.d.ts.map