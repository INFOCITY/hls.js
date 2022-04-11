/**
 * AAC demuxer
 */
import BaseAudioDemuxer from './base-audio-demuxer';
declare class AACDemuxer extends BaseAudioDemuxer {
    private readonly observer;
    private readonly config;
    static readonly minProbeByteLength: number;
    constructor(observer: any, config: any);
    resetInitSegment(audioCodec: any, videoCodec: any, duration: any): void;
    static probe(data: any): boolean;
    canParse(data: any, offset: any): boolean;
    appendFrame(track: any, data: any, offset: any): import("../types/demuxer").AudioFrame | undefined;
}
export default AACDemuxer;
//# sourceMappingURL=aacdemuxer.d.ts.map