import { EnrollParams } from './enroll';
import { BioInfo } from './verifyT2t';

export class Update {
    auditToken: string;
    bioInfo: BioInfo = new BioInfo();
    params: EnrollParams = new EnrollParams();
    subjectId: string;
}
