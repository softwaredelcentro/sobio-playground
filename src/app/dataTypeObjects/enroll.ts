import { BioInfo, FingerPrintMatchingParams } from './verifyT2t';
export class Enroll {
    auditToken: string;
    bioInfo: BioInfo = new BioInfo();
    params: EnrollParams = new EnrollParams();
    subjectId: string;
}

export class EnrollParams {
    conditions: EnrollConditions = new EnrollConditions();
    duplicateSearchParameters: DuplicateSearchParameters = new DuplicateSearchParameters();
}

export class EnrollConditions {
    i1: number;
    i2: number;
    i3: number;
    i4: number;
    i5: number;
    idIn: string;
    idLike: string;
    idNo: string;
    s1: string;
    s2: string;
    s3: string;
    s4: string;
    s5: string;
}

export class DuplicateSearchParameters {
    conditions: EnrollConditions = new EnrollConditions();
    faceMatchingParams: any;
    far = 1;
    fingerPrintMatchingParams: FingerPrintMatchingParams = new FingerPrintMatchingParams();
    globalSearchWithConditions: boolean;
    voiceMatchingParams: any;
}
