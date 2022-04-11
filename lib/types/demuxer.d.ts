export interface Demuxer {
    demux(data: Uint8Array, timeOffset: number, isSampleAes?: boolean, flush?: boolean): DemuxerResult;
    demuxSampleAes(data: Uint8Array, keyData: KeyData, timeOffset: number): Promise<DemuxerResult>;
    flush(timeOffset?: number): DemuxerResult | Promise<DemuxerResult>;
    destroy(): void;
    resetInitSegment(audioCodec: string | undefined, videoCodec: string | undefined, duration: number): any;
    resetTimeStamp(defaultInitPTS?: number | null): void;
    resetContiguity(): void;
}
export interface DemuxerResult {
    audioTrack: DemuxedAudioTrack;
    avcTrack: DemuxedVideoTrack;
    id3Track: DemuxedMetadataTrack;
    textTrack: DemuxedUserdataTrack;
}
export interface DemuxedTrack {
    type: string;
    id: number;
    pid: number;
    inputTimeScale: number;
    sequenceNumber: number;
    samples: AudioSample[] | AvcSample[] | MetadataSample[] | UserdataSample[] | Uint8Array;
    timescale?: number;
    container?: string;
    dropped: number;
    duration?: number;
    pesData?: ElementaryStreamData | null;
    codec?: string;
}
export interface DemuxedAudioTrack extends DemuxedTrack {
    config?: number[];
    samplerate?: number;
    isAAC?: boolean;
    channelCount?: number;
    manifestCodec?: string;
    samples: AudioSample[];
}
export interface DemuxedVideoTrack extends DemuxedTrack {
    width?: number;
    height?: number;
    pixelRatio?: [number, number];
    audFound?: boolean;
    pps?: number[];
    sps?: number[];
    naluState?: number;
    samples: AvcSample[] | Uint8Array;
}
export interface DemuxedAvcTrack extends DemuxedVideoTrack {
    samples: AvcSample[];
}
export interface PassthroughVideoTrack extends DemuxedVideoTrack {
    samples: Uint8Array;
}
export interface DemuxedMetadataTrack extends DemuxedTrack {
    samples: MetadataSample[];
}
export interface DemuxedUserdataTrack extends DemuxedTrack {
    samples: UserdataSample[];
}
export interface MetadataSample {
    pts: number;
    dts: number;
    len?: number;
    data: Uint8Array;
}
export interface UserdataSample {
    pts: number;
    bytes: Uint8Array;
}
export interface AvcSample {
    dts: number;
    pts: number;
    key: boolean;
    frame: boolean;
    units: AvcSampleUnit[];
    debug: string;
    length: number;
}
export interface AvcSampleUnit {
    data: Uint8Array;
    type: number;
}
export declare type AudioSample = {
    unit: Uint8Array;
    pts: number;
};
export declare type AudioFrame = {
    sample: AudioSample;
    length: number;
    missing: number;
};
export interface ElementaryStreamData {
    data: Uint8Array[];
    size: number;
}
export interface KeyData {
    method: string;
    key: Uint8Array;
    iv: Uint8Array;
}
//# sourceMappingURL=demuxer.d.ts.map