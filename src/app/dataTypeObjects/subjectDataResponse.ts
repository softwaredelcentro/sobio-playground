import { BioInfo } from './verifyT2t';

export class SubjectDataResponse {
    exception: boolean;
    status: string;
    template: BioInfo;
    txId: string;
}
