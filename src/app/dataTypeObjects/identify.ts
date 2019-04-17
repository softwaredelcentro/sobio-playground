import { BioInfo } from './verifyT2t';
import { DuplicateSearchParameters } from './enroll';
export class Identify {
    auditToken: string;
    bioInfo: BioInfo = new BioInfo();
    params: DuplicateSearchParameters = new DuplicateSearchParameters();
}
