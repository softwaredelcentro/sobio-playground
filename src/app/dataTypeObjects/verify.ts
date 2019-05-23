import { BioInfo, FingerPrintMatchingParams } from './verifyT2t';
export class Verify {
    auditToken: string;
    bioInfo: BioInfo = new BioInfo();
    params: VerifyParams = new VerifyParams();
    subjectId: string;
}

export class VerifyParams {
    faceMatchingParams: any;
    // far = 1;
    fingerPrintMatchingParams: FingerPrintMatchingParams = new FingerPrintMatchingParams();
    voiceMatchingParams: any;
}
