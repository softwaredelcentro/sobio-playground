import { GenericRespone } from './genericResponse';

export class SubjectInfoResponse extends GenericRespone {
    compositeFingerCount: number;
    enrollmentDate: string;
    faceCount: number;
    fingerCount: number;
    hasTextIndependentVoice: boolean;
    i1: number;
    i2: number;
    i3: number;
    i4: number;
    i5: number;
    lastIdentifyDate: string;
    lastUpdateDate: string;
    lastVerifyDate: string;
    s1: string;
    s2: string;
    s3: string;
    s4: string;
    s5: string;
    textDependentVoiceCount: number;
}
